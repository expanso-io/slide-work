import Figma from 'figma-js';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const client = Figma.Client({
  personalAccessToken: process.env.FIGMA_TOKEN
});

const FILE_KEY = 'your-figma-file-key'; // From Figma URL

async function createSlideFromJSON(slideJSON) {
  // Parse the JSON
  const slide = JSON.parse(fs.readFileSync(slideJSON, 'utf8'));
  
  // Create the main frame
  const frame = {
    type: 'FRAME',
    name: slide.frame_name,
    width: slide.dimensions.width,
    height: slide.dimensions.height,
    backgroundColor: hexToRgb(slide.background.color),
    children: []
  };
  
  // Process each element
  for (const element of slide.elements) {
    const figmaNode = convertElementToFigmaNode(element);
    frame.children.push(figmaNode);
  }
  
  // Make API call to create the frame
  const result = await client.fileImages({
    fileKey: FILE_KEY,
    // ... API call parameters
  });
  
  return result;
}

function convertElementToFigmaNode(element) {
  switch(element.type) {
    case 'text':
      return createTextNode(element);
    case 'container':
      return createFrameNode(element);
    case 'arrow':
      return createVectorNode(element);
    case 'group':
      return createGroupNode(element);
    default:
      throw new Error(`Unknown element type: ${element.type}`);
  }
}

function createTextNode(element) {
  return {
    type: 'TEXT',
    name: element.id,
    characters: element.content,
    style: {
      fontFamily: element.style.font_family,
      fontSize: element.style.font_size,
      fontWeight: element.style.font_weight,
      textAlignHorizontal: mapAlignment(element.style.text_align),
      fills: [{ type: 'SOLID', color: hexToRgb(element.style.color) }]
    },
    x: element.position.x === 'center' ? 'AUTO' : element.position.x,
    y: element.position.y,
    width: element.position.max_width || 'AUTO'
  };
}

function createFrameNode(element) {
  return {
    type: 'FRAME',
    name: element.id,
    x: element.position.x,
    y: element.position.y,
    width: element.position.width,
    height: element.position.height,
    fills: parseBackground(element.style.background),
    strokes: parseBorder(element.style.border),
    cornerRadius: element.style.border_radius || 0,
    children: element.elements?.map(convertElementToFigmaNode) || []
  };
}

function createVectorNode(element) {
  // This is more complex - arrows require vector path data
  return {
    type: 'VECTOR',
    name: element.id,
    vectorPaths: generateArrowPath(element.position.from, element.position.to),
    strokes: [{
      type: 'SOLID',
      color: hexToRgb(element.style.stroke)
    }],
    strokeWeight: element.style.stroke_width
  };
}

// Helper functions
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 1, g: 1, b: 1 };
}

function mapAlignment(align) {
  const map = {
    'left': 'LEFT',
    'center': 'CENTER',
    'right': 'RIGHT'
  };
  return map[align] || 'LEFT';
}

// Run it
createSlideFromJSON('./slide_01.json')
  .then(result => console.log('Slide created:', result))
  .catch(err => console.error('Error:', err));
