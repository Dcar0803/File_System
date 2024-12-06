const fs = require('fs');

/**
 * Writes content to a specified file path.
 * @param {string} filePath - The path to the file.
 * @param {string} content -The content to write.

 */

function writeFile(filePath, content){
    fs.writeFileSync(filePath, content, 'utf8');

}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

module.exports = {writeFile};