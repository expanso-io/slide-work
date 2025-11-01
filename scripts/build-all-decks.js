#!/usr/bin/env node

/**
 * Build All Decks Script
 * 
 * This script:
 * 1. Scans the slides/ directory for all deck files matching YYYY-MM-DD-*.md
 * 2. Builds each deck to its own subdirectory in dist/
 * 3. Copies the index.html to dist/ for the deck directory page
 * 
 * Usage:
 *   npm run build:all
 *   npm run build:gh  (same as build:all, used by GitHub Actions)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const SLIDES_DIR = path.join(__dirname, '..', 'slides');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const INDEX_HTML = path.join(__dirname, '..', 'index.html');
const BASE_PATH = process.env.GITHUB_ACTIONS ? '/slide-code/' : '/';

// Deck filename pattern: YYYY-MM-DD-*.md
const DECK_PATTERN = /^(\d{4}-\d{2}-\d{2}-.+)\.md$/;

console.log('🚀 Building all Expanso presentation decks...\n');

// Step 1: Find all deck files
console.log('📂 Scanning slides directory:', SLIDES_DIR);
const files = fs.readdirSync(SLIDES_DIR);
const deckFiles = files.filter(file => DECK_PATTERN.test(file));

if (deckFiles.length === 0) {
  console.error('❌ No deck files found matching pattern YYYY-MM-DD-*.md');
  process.exit(1);
}

console.log(`✅ Found ${deckFiles.length} deck(s):\n`);
deckFiles.forEach(file => console.log(`   - ${file}`));
console.log('');

// Step 2: Clean and create dist directory
console.log('🧹 Cleaning dist directory...');
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// Step 3: Build each deck
let successCount = 0;
let failCount = 0;

deckFiles.forEach((file, index) => {
  const match = file.match(DECK_PATTERN);
  const deckSlug = match[1]; // e.g., "2025-11-01-sales-demo"
  const inputPath = path.join(SLIDES_DIR, file);
  const outputPath = path.join(DIST_DIR, deckSlug);
  
  console.log(`\n📊 [${index + 1}/${deckFiles.length}] Building: ${deckSlug}`);
  console.log(`   Input:  ${inputPath}`);
  console.log(`   Output: ${outputPath}`);
  
  try {
    // Build the deck with Slidev
    const buildCommand = `npx slidev build "${inputPath}" \
--out "${outputPath}" --base "${BASE_PATH}${deckSlug}/"`;
    
    execSync(buildCommand, { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    
    console.log(`   ✅ Successfully built ${deckSlug}`);
    successCount++;
  } catch (error) {
    console.error(`   ❌ Failed to build ${deckSlug}`);
    console.error(`   Error: ${error.message}`);
    failCount++;
  }
});

// Step 4: Copy index.html to dist
console.log('\n📋 Copying deck directory page...');
try {
  fs.copyFileSync(INDEX_HTML, path.join(DIST_DIR, 'index.html'));
  console.log('   ✅ Copied index.html to dist/');
} catch (error) {
  console.error('   ❌ Failed to copy index.html');
  console.error(`   Error: ${error.message}`);
  failCount++;
}

// Step 5: Generate summary
console.log('\n' + '='.repeat(60));
console.log('📊 Build Summary:');
console.log('='.repeat(60));
console.log(`✅ Successful builds: ${successCount}/${deckFiles.length}`);
if (failCount > 0) {
  console.log(`❌ Failed builds:     ${failCount}`);
}

// List output structure
console.log('\n📁 Output structure:');
console.log(`   dist/`);
console.log(`   ├── index.html (deck directory)`);
const builtDecks = fs.readdirSync(DIST_DIR).filter(f => f !== 'index.html');
builtDecks.forEach((deck, i) => {
  const isLast = i === builtDecks.length - 1;
  console.log(`   ${isLast ? '└──' : '├──'} ${deck}/ (slide deck)`);
});

console.log('\n🎉 Build complete!\n');

// Exit with error if any builds failed
if (failCount > 0) {
  process.exit(1);
}
