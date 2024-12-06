const fs = require('fs');
const path = require('path');
const { writeFile, readFile, countLines } = require('../fileOperations');

describe('File Operations', () => {
    const testFilePath = path.join(__dirname, 'testFileWrite.txt');

    afterAll(() => {
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
    });//end of afterAll

    test('should write content to a file', () => {
        const content = 'Hello, Node.js!';
        writeFile(testFilePath, content);
        const writtenContent = fs.readFileSync(testFilePath, 'utf8');
        expect(writtenContent).toBe(content);
    });//end of test 

    test('should read content from a file', () => {
        const expectedContent = 'Hello, World!';
        fs.writeFileSync(testFilePath, expectedContent);
        const readContent = readFile(testFilePath);
        expect(readContent).toBe(expectedContent);
    });//end of test


    test('should count the number of lines in a file', () => {
        const multilineContent = `Line 1\nLine 2\nLine 3`;
        fs.writeFileSync(testFilePath, multilineContent);
        const lineCount = countLines(testFilePath);
        expect(lineCount).toBe(3);
    });//end of test


});//end of describe