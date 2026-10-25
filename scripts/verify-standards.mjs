import fs from 'fs';
import path from 'path';

console.log('=====================================================');
console.log('DELHIWALA ELEVATION — ARCHITECTURAL VERIFICATION SUITE');
console.log('=====================================================\n');

let failed = 0;
let passed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// 1. Check specification files exist
const specFiles = ['.cursorrules', 'PRD.md', 'design.md', 'architecture.md', 'phases.md'];
for (const file of specFiles) {
  assert(fs.existsSync(file), `Spec file "${file}" exists in project root`);
}

// 2. Check Dist Output exists
assert(fs.existsSync('dist/index.html'), 'dist/index.html generated');
const assets = fs.readdirSync('dist/assets');
assert(assets.some(a => a.endsWith('.css')), 'CSS bundle created in dist/assets');
assert(assets.some(a => a.endsWith('.js')), 'JS bundle created in dist/assets');

// 3. Check for Strict Architectural Rules in source code
const srcFiles = [];
function readDirRecursive(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      readDirRecursive(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.css')) {
      srcFiles.push(fullPath);
    }
  }
}
readDirRecursive('src');

let foundRoundedViolations = 0;
let foundDarkViolations = 0;
let foundGoldViolations = 0;

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // Check for forbidden rounded classes (rounded-xl, rounded-2xl, rounded-3xl)
  if (/rounded-(xl|2xl|3xl|lg|md)/.test(content)) {
    console.warn(`Warning: Found rounded corner pattern in ${file}`);
    foundRoundedViolations++;
  }

  // Check for dark mode classes (dark:)
  if (/\bdark:/.test(content)) {
    console.warn(`Warning: Found dark mode class in ${file}`);
    foundDarkViolations++;
  }

  // Check for gold colors
  if (/#FFD700|#D4AF37|#F59E0B|yellow-/i.test(content)) {
    console.warn(`Warning: Found yellow/gold color pattern in ${file}`);
    foundGoldViolations++;
  }
}

assert(foundRoundedViolations === 0, 'Zero forbidden rounded corner classes (rounded-xl/2xl/3xl)');
assert(foundDarkViolations === 0, 'Zero dark mode classes (dark:) — pure daylight aesthetic enforced');
assert(foundGoldViolations === 0, 'Zero yellow/gold accents — strictly WPC teak (#6E473B) & charcoal (#1C1B19)');

// 4. Verify Contact Information in Code
const routerContent = fs.readFileSync('src/utils/whatsappRouter.ts', 'utf8');
assert(routerContent.includes('78303 35445'), 'Official phone +91 78303 35445 present in whatsappRouter.ts');
assert(routerContent.includes('delhiwala.elevation@gmail.com'), 'Email delhiwala.elevation@gmail.com present');
assert(routerContent.includes('@delhiwala.elevation'), 'Instagram @delhiwala.elevation present');

// 5. Verify Material Systems & Projects via source inspection
const materialFile = fs.readFileSync('src/data/materialSystems.ts', 'utf8');
const materialMatch = materialFile.match(/id:\s*['"][^'"]+['"]/g) || [];
assert(materialMatch.length === 4, '4 core material systems implemented in matrix');

const projectsFile = fs.readFileSync('src/data/projectsData.ts', 'utf8');
const projectMatch = projectsFile.match(/id:\s*['"][^'"]+['"]/g) || [];
assert(projectMatch.length >= 6, 'At least 6 verified site execution projects in archive');

const aspectMatches = projectsFile.match(/aspectRatio:\s*['"]([^'"]+)['"]/g) || [];
const allValidAspects = aspectMatches.every(a => a.includes('16/10') || a.includes('4/5'));
assert(allValidAspects && aspectMatches.length >= 6, 'All projects adhere to 16/10 or 4/5 architectural aspect ratios');

console.log(`\nVerification Complete: ${passed} Passed, ${failed} Failed`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL ARCHITECTURAL INTEGRITY CHECKS PASSED!\n');
}
