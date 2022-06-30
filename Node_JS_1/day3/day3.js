//path modules working with files and working directory:-

// const path = require('path')
// console.log(path.dirname('C:/Users/user/Desktop/prashant/day2.js'));
//  console.log(path.extname('C:/Users/user/Desktop/prashant/day2.js'));
// console.log(path.basename('C:/Users/user/Desktop/prashant/day2.js'));
// console.log(path.parse('C:/Users/user/Desktop/prashant/day2.js'));
// console.log(path.parse('C:/Users/user/Desktop/prashant/day2.js'));

//how to create our own server from nodejs by acquiring HTTP
//modules. HTTP handles request asynchronously.

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('hello world! good morning')
// })

// server.listen(3000, () => {
//     console.log('server is running at http://localhost:3000');
// })


//req.url when user is  requesting from url then we response through http 
//we can see through url what client ask for through http module

const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url);

    if (req.url == "/") {
        res.end('hello world! good morning')
    } else if (req.url == "/about") {
        res.write('hi guys!')
        res.end('<h1>this is about page</h1>')
    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end('<h1>404 server is not found</h1>')
    }

})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})
