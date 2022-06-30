// JSON-stands for javascript object notation .
// json is a lightweight format .
//  for storing and transporting data.json is used to sent data from a server to webpages.

// syntax
// const fs = require('fs')
// const data = {
//     name: "prashant",
//     last: "praveen",
//     status: true
// };

// console.log(data.name);
// const jsondata = JSON.stringify(data)
// console.log(jsondata.name); //not doin this
// console.log(jsondata);
// const jsondata2 = JSON.parse(jsondata)
// console.log(jsondata2.status);


// const jsondata = JSON.stringify(data)
// fs.writeFile('json1.json', jsondata, (err) => {
//     console.log("done");
// })

// fs.readFile('json1.json', 'utf8', (err, data) => {
    // console.log(data);
    // const orgdata = JSON.parse(data)
    // console.log(orgdata);
// })