const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/prac", { useNewUrlParser: true })
  .then(() => {
    console.log("connection successful establish");
  })
  .catch((err) => {
    console.log("error connection");
  });

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const md = mongoose.model("list", schema);
//1st insert create
// const createDocument = async () => {
//   try {
//     const dbList = md({
//       name: "prashant",
//       age: 25,
//       active: true,
//     });

//     const result = await dbList.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

//2nd insert many create
// const createDocument = async () => {
//   try {
//     const data1 = md({
//       name: "praveen",
//       age: 25,
//       active: true,
//     });
//     const data2 = md({
//       name: "prashant",
//       age: 25,
//       active: true,
//     });
//     const data3 = md({
//       name: "arun",
//       age: 25,
//       active: true,
//     });
//     const result = await md.insertMany([data1, data2, data3]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

//3rd read document
// const getDocument = async () => {
//   const result = await md.find({ age: 25 });
//   console.log(result);
// };
// getDocument();

//4th update

//5th delete
