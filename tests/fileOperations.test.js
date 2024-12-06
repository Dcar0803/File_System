const fs = require('fs');
const path = require('path');
const { writeFile } = require('../fileOperations');

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

});//end of describe