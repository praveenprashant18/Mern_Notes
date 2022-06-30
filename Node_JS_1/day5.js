//events

// const events = require("events")
// const event = new events();
// event.on('say', () => {
//     console.log("hello!......")
// })
// event.on('say', () => {
//     console.log("hello")
// })
// event.emit("say")




//nodejs streams

// streams-> are objects that let you read data from a source or write data to a destination
// streams means listening music and real time videos
// in continous manner.in node js there are 4 types of streams:


// readable-which used to read operation
//writable-is used to write operations
//duplex-stream which can be used both for read and write operation
//transform-output is computed based on input

//when we event in streams we need sevral instances of time
// 1-data->event is fired when data is available to read
// 2-end->event is firedwhen there is no more data to read
// 3-error->any error receiving or writing data
//-----------------------------------------------------------------

// const fs = require("fs")
// const http = require("http")


// const server = http.createServer();
// server.on("request", (req,res)=>{
    // fs.readFile('some.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

// const rstream= fs.createReadStream('some.txt')


// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata)
// })
// rstream.on('end', ()=>{
//     res.end();
// })
// rstream.on("error",(err)=>{
//     res.end("file not found")
// })

// rstream.pipe(res)


// })

// server.listen(8000,'127.0.0.1');