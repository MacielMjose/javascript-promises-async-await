//callback > promise > async/await

const fs = require("fs");

// //callback
// fs.readFile("./in1.txt", (error, contents) => {
//   console.log(String(contents));
// });

//promise
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });

// readFile("./in1.txt")
//   .then((contents) => {
//     console.log(String(contents));
//   })
//   .catch();

console.log(1);
console.log(2);
console.log(3);

//async/await -- açucar sintatico em cima da promise

const init = async () => {
  try {
    const contents = await readFile("./in1.txt");
    console.log(String(contents));
  } catch (error) {
    console.log(error);
  }
};

console.log(init()); //sinonimo init().then();
