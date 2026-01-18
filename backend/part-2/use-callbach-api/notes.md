
## 1. Introduction to Node.js `fs` Module

The `fs` module in Node.js stands for File System. It provides an API to interact with the file system of your operating system. Using this module, you can create, read, update, delete, rename, and manage files and directories.

Node.js provides two styles of `fs` API:

1. Callbacks API – traditional asynchronous style using callbacks (what you are using).
2. Promises API – modern style using `fs.promises` and `async/await`.

Here, we focus on the callbacks API.

## 2. Importing the `fs` Module

Before any file operation, you must import the module:

```js
const fs = require('fs');
```

* `require('fs')` loads the file system module into your program.
* Now, `fs` contains many methods to perform file and directory operations.

## 3. Creating and Writing to a File

```js
fs.writeFile('output.txt', 'Hello, World!', function (err) {
    if (err) console.error('Error writing file:', err);
    console.log('File has been saved!');
})
```

Explanation:

* `fs.writeFile()` creates a new file or overwrites an existing file.
* Parameters:

  1. `'output.txt'` – name of the file to create/write.
  2. `'Hello, World!'` – content to write into the file.
  3. `function(err)` – callback function executed after the operation completes.

     * `err` is `null` if operation succeeds; otherwise contains the error object.
* Behavior:

  * If `output.txt` exists, it overwrites the content.
  * If it does not exist, Node.js creates the file.

> Think of `writeFile` as taking a blank notebook and writing your words on the first page. If the notebook already has notes, all old notes are erased.

## 4. Appending Data to a File

```js
fs.appendFile('output.txt', 'bharat', function (err) {
    if (err) console.error('Error appending file:', err);
    console.log('File has been appended!');
})
```

Explanation:

* `fs.appendFile()` adds new content to the end of an existing file.
* Parameters:

  1. `'output.txt'` – target file.
  2. `'bharat'` – text to append.
  3. Callback to handle completion.
* Behavior:

  * If the file does not exist, Node.js creates a new file automatically.
  * If the file exists, new content is added after existing content.


> Imagine a notebook where you are adding extra lines at the bottom of the page rather than starting over.


## 5. Renaming a File

```js
fs.rename('output.txt', 'hello.txt', function (err) {
    if (err) console.error('Error renaming file:', err);
    console.log('File has been renamed!');
})
```

Explanation:

* `fs.rename()` changes the name of a file or moves it to another directory.
* Parameters:

  1. `'output.txt'` – current file name.
  2. `'hello.txt'` – new file name.
  3. Callback to handle completion.
* Behavior:

  * If the target name already exists, it overwrites the existing file.
  * Can also be used to **move files** by specifying a different directory in the second parameter.



> Renaming a file is like taking a book and changing its title on the cover page.

## 6. Copying a File

```js
fs.copyFile('hello.txt', 'nodejs/copy/data.txt', function (err) {
    if (err) console.error('Error copying file:', err);
    console.log('File has been copied!');
})
```

Explanation:

* `fs.copyFile()` duplicates a file from one location to another.
* Parameters:

  1. `'hello.txt'` – source file.
  2. `'nodejs/copy/data.txt'` – destination path (can include new file name).
  3. Callback function.
* Behavior:

  * Creates a new file with the same content as the source.
  * If the destination already exists, it overwrites it.


> Imagine photocopying a page of your book and putting it in a new folder.

Important Note:

* Ensure the destination directory exists before copying, or Node.js throws an error.

## 7. Deleting a File (Unlinking)

```js
fs.unlink('nodejs/copy/data.txt', function (err) {
    if (err) console.error('Error deleting file:', err);
    console.log('File has been deleted!');
});
```

Explanation:

* `fs.unlink()` removes a file from the file system.
* Parameters:

  1. File path to delete.
  2. Callback function.
* Behavior:

  * Once deleted, the file is gone permanently.
  * If the file does not exist, Node.js throws an error.

Bookish analogy:

> Think of `unlink` as tearing a page from a notebook—once it’s gone, it’s gone.

## 8. Removing a Directory

```js
fs.rmdir('nodejs/copy', { recursive: true }, function (err) {
    if (err) console.error('Error removing directory:', err);
    console.log('Directory has been removed!');
});  
```

Explanation:

* `fs.rmdir()` deletes a directory.
* Parameters:

  1. Directory path.
  2. Options object `{ recursive: true }`

     * `recursive: true` allows Node.js to delete a directory with all its contents.
     * `recursive: false` only deletes **empty directories**.
  3. Callback function.
* Behavior:

  * Deletes the specified directory along with all nested files and folders if `recursive` is `true`.



> Removing a directory recursively is like clearing an entire drawer with all its folders and papers in one go.


## 9. Callback Pattern in Node.js

* All functions above follow the Node.js standard callback pattern:

```js
function(err, result) {
    if (err) handleError();
    else handleSuccess();
}
```

* Why? Node.js is asynchronous. Callbacks ensure that the operation finishes before you take further action.
* Error handling is important because file operations often fail due to:

  * Missing files
  * Permission issues
  * Invalid paths

-