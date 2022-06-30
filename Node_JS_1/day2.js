// core modules
// -> modules is same as js libraries.a set of function you want to include in your project.
// ->nodejs has built-in core modules which we can use any by installation.

//asynchronous version

// const fs = require('fs')
// fs.writeFile('asyncwrite.txt', 'this asynchronous file data', (error) => {
//     if (error) throw error;
//     console.log('file created');
// })
// fs.appendFile('asyncwrite.txt', ' hello guys!', (err) => {
//     console.log("successfully added");
// })

// fs.readFile('asyncwrite.txt', 'utf8', (err,data) => {
//     console.log(data);
//     console.log("file read successfully");
// })

//CRUD Operation by async and sync

// const fs = require('fs')
// fs.mkdir('file', (err) => {
//     console.log('folder created');
// })

// fs.writeFilesync('file/file.txt', "hello guys what's up");
// console.log('file created and writed file succesfully');

// fs.appendFile('file/file.txt', "good afternoon!", (err) => {
//     console.log('file append successfully');
// })

// fs.renameSync('file/async.txt', 'file/asyncFile.txt');
// console.log('file renamed successfully');

// fs.readFile('file/asyncFile.txt', 'utf8', (err, data) => {
//     console.log(data);
//     console.log('file readed successfully');
// })

// fs.unlinkSync('file/asyncFile.txt')
// console.log("file deleted successfully!");


// fs.rmdir('file', (err) => {
//     console.log("folder deleted successfully!");
// })

