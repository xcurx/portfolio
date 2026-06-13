const fs = require('fs');
const path = require('path');

const components = ['ascii-art', 'pixelated-canvas', 'dither-shader'];
const outDir = path.join(__dirname, 'components', 'ui');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function fetchComponent(name) {
  const url = `https://ui.aceternity.com/registry/${name}.json`;
  console.log(`Fetching ${url}...`);
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.files && data.files.length > 0) {
      for (const file of data.files) {
        const filePath = path.join(__dirname, file.target);
        const fileDir = path.dirname(filePath);
        if (!fs.existsSync(fileDir)) {
          fs.mkdirSync(fileDir, { recursive: true });
        }
        fs.writeFileSync(filePath, file.content);
        console.log(`Saved ${filePath}`);
      }
    }
  } catch (err) {
    console.error(`Failed to fetch ${name}:`, err.message);
  }
}

async function main() {
  for (const name of components) {
    await fetchComponent(name);
  }
}

main();
