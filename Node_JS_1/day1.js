// what is Node.js?
// ->Node.js is a js runtime built on chrome's v8 js engine(made by c++)
// ->Node.js is a javascript running on the server.(client side scripting lang)

// history of Node.js
// -> 2009 idea came to Ryan Dahl(google engineer) make language that will run js out of the browser,
// so he took v8 engine and embedded in a c++ program and it called Node.exe later on became nodejs.

// when to use nodejs?
// i/o bound
//data streaming applications
//real time applications

//installation of nodejs from official website
//check version in cmd by (node -v) and npm -v
// run below code by node filename.js or simply node filename
// console.log('hello world');

//REPL->read,evaluate,print,loop
// is very useful features to experiments nodejs codes and debug js codes
// read->reads user input and stores in memory.
// eval->takes and evaluate the data
// print->print the results
// loop->loop the code given in command.


//os module
// const os = require('os')
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.networkInterfaces());
// console.log(os.release());
//etc