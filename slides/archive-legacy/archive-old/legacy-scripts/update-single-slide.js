#!/usr/bin/env node

/**
 * Update a single slide in Figma
 * Deletes the old version and creates a new one at the same position
 */

import WebSocket from 'ws';
import fs from 'fs';

const WS_URL = 'ws://localhost:3055';
const CHANNEL = 'eo7p605x';
const SLIDE_FILE = process.argv[2] || './slides/slide_001.json';
const SLIDE_INDEX = parseInt(process.argv[3] || '0'); // Which position in the grid

// Slide layout configuration
const SLIDE_SPACING = 100;
const SLIDES_PER_ROW = 4;
const START_X = 100;
const START_Y = 100;

// Helper to convert hex to RGB (0-1 range)
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return { r: 1, g: 1, b: 1 };
    return {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    };
}

// Calculate position for slide based on index
function getSlidePosition(index, width = 1920, height = 1080) {
    const row = Math.floor(index / SLIDES_PER_ROW);
    const col = index % SLIDES_PER_ROW;

    return {
        x: START_X + col * (width + SLIDE_SPACING),
        y: START_Y + row * (height + SLIDE_SPACING)
    };
}

// Build commands for the slide
function buildSlideCommands(slideData, slideIndex) {
    const { frame_name, dimensions, background, elements } = slideData;

    // Use solid color from alternative if gradient is specified
    const bgColor = background.type === 'gradient' && background.alternative
        ? hexToRgb(background.alternative.color)
        : hexToRgb(background.color || '#1a2332');

    const position = getSlidePosition(slideIndex, dimensions.width, dimensions.height);

    const commands = [];

    // Create main frame
    commands.push({
        type: 'create_frame',
        params: {
            name: frame_name,
            x: position.x,
            y: position.y,
            width: dimensions.width,
            height: dimensions.height,
            fillColor: { ...bgColor, a: 1 }
        },
        description: `Create frame "${frame_name}"`
    });

    // Process each element
    elements.forEach(element => {
        if (element.type === 'text') {
            // Calculate position relative to slide frame
            let textX = element.position.x;
            if (textX === 'center' && element.position.max_width) {
                textX = (dimensions.width - element.position.max_width) / 2;
            }

            const textColor = hexToRgb(element.style.color);

            commands.push({
                type: 'create_text',
                params: {
                    name: element.id,
                    x: position.x + textX,
                    y: position.y + element.position.y,
                    content: element.content,
                    fontSize: element.style.font_size,
                    fontFamily: element.style.font_family || 'Inter',
                    fontWeight: element.style.font_weight || 400
                },
                description: `Create text "${element.content.substring(0, 30)}..."`
            });

            // Set text color
            commands.push({
                type: 'set_fill_color',
                params: { ...textColor, a: 1 },
                description: `Set text color`
            });

        } else if (element.type === 'container') {
            const fillColor = hexToRgb(element.style.background);

            commands.push({
                type: 'create_rectangle',
                params: {
                    name: element.id,
                    x: position.x + element.position.x,
                    y: position.y + element.position.y,
                    width: element.position.width,
                    height: element.position.height
                },
                description: `Create ${element.id}`
            });

            commands.push({
                type: 'set_fill_color',
                params: { ...fillColor, a: 1 },
                description: `Set ${element.id} color`
            });

            if (element.style.border_radius !== undefined) {
                commands.push({
                    type: 'set_corner_radius',
                    params: { radius: element.style.border_radius },
                    description: `Set corner radius`
                });
            }
        }
        // Note: image and diagram types are skipped as they need manual creation in Figma
    });

    return commands;
}

// WebSocket connection and message handling
let ws;
let currentChannel = null;
let commandQueue = [];
let currentCommandIndex = 0;

function sendNextCommand() {
    if (currentCommandIndex >= commandQueue.length) {
        console.log(`\n✅ Slide updated successfully!`);
        ws.close();
        process.exit(0);
        return;
    }

    const cmd = commandQueue[currentCommandIndex];
    console.log(`  [${currentCommandIndex + 1}/${commandQueue.length}] ${cmd.description}`);

    const message = {
        id: `cmd-${Date.now()}-${currentCommandIndex}`,
        type: 'message',
        channel: currentChannel,
        message: {
            id: `cmd-${Date.now()}-${currentCommandIndex}`,
            command: cmd.type,
            params: {
                ...cmd.params,
                commandId: `cmd-${Date.now()}-${currentCommandIndex}`
            }
        }
    };

    ws.send(JSON.stringify(message));
}

// Load and process slide
console.log(`\n🔄 Updating slide from: ${SLIDE_FILE}`);
console.log(`📍 Position: Slide ${SLIDE_INDEX + 1} (index ${SLIDE_INDEX})\n`);

const slideData = JSON.parse(fs.readFileSync(SLIDE_FILE, 'utf8'));

ws = new WebSocket(WS_URL);

ws.on('open', () => {
    console.log('✅ Connected to WebSocket server\n');

    console.log(`🔌 Joining channel: ${CHANNEL}`);
    const joinMessage = {
        id: `join-${Date.now()}`,
        type: 'join',
        channel: CHANNEL
    };
    ws.send(JSON.stringify(joinMessage));
});

ws.on('message', (data) => {
    const response = JSON.parse(data.toString());

    // Check if this is a channel join confirmation
    if (response.type === 'system' && response.channel === CHANNEL && !currentChannel) {
        currentChannel = CHANNEL;
        console.log(`✅ Joined channel: ${CHANNEL}\n`);

        // Build and start executing commands
        commandQueue = buildSlideCommands(slideData, SLIDE_INDEX);
        currentCommandIndex = 0;

        console.log(`📊 Built ${commandQueue.length} commands\n`);
        sendNextCommand();
        return;
    }

    // Handle command responses
    if (response.type === 'message' || response.result || response.success !== false) {
        currentCommandIndex++;
        setTimeout(() => sendNextCommand(), 300);
    } else if (response.error) {
        console.error(`   ⚠️ Error:`, response.error);
        currentCommandIndex++;
        setTimeout(() => sendNextCommand(), 300);
    }
});

ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error.message);
    process.exit(1);
});

ws.on('close', () => {
    console.log('\n🔌 Disconnected from WebSocket server');
});

