const fs = require("fs");

// Blocking synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);

// Non-blocking asynchronous way
fs.readFile("./txt/start.txt", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    const textOut2 = `This is what we know about the avocado: ${data2}.\nCreated on ${Date.now()}`;
    console.log(`Successfully read file ${data1}.txt`);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log("Successfully read file append.txt");
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Writing has finished successfully!");
      });
    });
  });
});
console.log("Reading started...");
