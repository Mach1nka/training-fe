const fs = require('fs');
const path = require('path');

const cacheFolderPath = path.resolve(process.cwd(), 'node_modules', '.cache', 'babel-loader');

fs.rmSync(cacheFolderPath, { recursive: true, force: true });
console.log('The babel cache folder has been removed.');
