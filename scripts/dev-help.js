#!/usr/bin/env node

/**
 * Dev Help Script
 * 
 * Shows help message and lists all available decks
 */

const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.join(__dirname, '..', 'slides');
const DECK_PATTERN = /^(\d{4}-\d{2}-\d{2}-.+)\.md$/;

console.log('\n');
console.log('━'.repeat(70));
console.log('📊 Expanso Presentation Decks - Development Server');
console.log('━'.repeat(70));
console.log('\n❌ ERROR: No deck specified\n');

console.log('📖 USAGE:\n');
console.log('  npm run dev:deck --deck=<deck-slug>    Open specific deck in dev mode');
console.log('  npm run dev:index                      View index page (all decks)');
console.log('  npm run dev:list                       Show this help + deck list');
console.log('\n');

// Scan for available decks
console.log('📁 AVAILABLE DECKS:\n');

try {
  const files = fs.readdirSync(SLIDES_DIR);
  const deckFiles = files.filter(file => DECK_PATTERN.test(file));
  
  if (deckFiles.length === 0) {
    console.log('   ⚠️  No decks found in slides/ directory\n');
    process.exit(1);
  }
  
  deckFiles.sort().forEach((file, index) => {
    const match = file.match(DECK_PATTERN);
    const slug = match[1];
    const filePath = path.join(SLIDES_DIR, file);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    
    // Try to read first few lines to get title
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    console.log(`   ${index + 1}. ${slug}`);
    console.log(`      Title: ${title}`);
    console.log(`      Size:  ${sizeKB}KB`);
    console.log(`      Dev:   npm run dev:deck --deck=${slug}`);
    console.log('');
  });
  
} catch (error) {
  console.log(`   ❌ Error reading slides directory: ${error.message}\n`);
  process.exit(1);
}

console.log('💡 EXAMPLES:\n');
console.log('  # Start development server for a specific deck');
console.log('  npm run dev:deck --deck=2025-11-01-sales-demo\n');
console.log('  # View the deck directory index page');
console.log('  npm run dev:index\n');
console.log('  # Build all decks and preview locally');
console.log('  npm run build:all && npx serve dist\n');

console.log('━'.repeat(70));
console.log('\n');

process.exit(1);
