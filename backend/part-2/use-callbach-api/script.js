// Use node.js fs module to perform file operations
// Use callbacks API 

const fs = require('fs');

// Creating and writing to a file
fs.writeFile('output.txt', 'Hello, World!', function (err) {
    if (err) console.error('Error writing file:', err);
    console.log('File has been saved!');
})

// Appending data to a file
fs.appendFile('output.txt', 'bharat', function (err) {
    if (err) console.error('Error appending file:', err);
    console.log('File has been appended!');
})

// Renaming a file
fs.rename('output.txt', 'hello.txt', function (err) {
    if (err) console.error('Error renaming file:', err);
    console.log('File has been renamed!');
})

// copying a file 
fs.copyFile('hello.txt', 'nodejs/copy/data.txt', function (err) {
    if (err) console.error('Error copying file:', err);
    console.log('File has been copied!');
})

// Unlinking (deleting) a file
fs.unlink('nodejs/copy/data.txt', function (err) {
    if (err) console.error('Error deleting file:', err);
    console.log('File has been deleted!');
});

// rmdir - removing a directory
fs.rmdir('nodejs/copy',{recursive: true}, function (err) {
    if (err) console.error('Error removing directory:', err);
    console.log('Directory has been removed!');
});