const fs = require("fs");
fs.appendFile(
  "example.txt",
  process.argv.splice(2, process.argv.length).join(" ") + "\n",
  (error) => {
    error ? console.error(error) : console.log(`Appended`);
  }
);
