const fs = require('fs');

/**
 * Writes content to a specified file path.
 * @param {string} filePath - The path to the file.
 * @param {string} content -The content to write.

 */

function writeFile(filePath, content){
    fs.writeFileSync(filePath, content, 'utf8');

}

/**
 * Reads and returns content from a specified file
 * @param {string} filePath  -The path to the file
 * @returns  {string} The content of the file.
 */

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}


/**
 * Counts the number of lines in a file.
 * @param {string} filePath - The path to the file.
 * @returns {number} The number of lines in the file.
 */


function countLines(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').length;
}

module.exports = {writeFile , readFile, countLines};