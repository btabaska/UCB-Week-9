const fs = require("fs");
fs.writeFile(
  "note.txt",
  process.argv.splice(2, process.argv.length).join(" "),
  (err) => {
    if (err) throw err;
    console.log("finished");
  }
);

fs.readFile("note.txt", "utf8", (error, data) =>
  error ? console.error(error) : console.log(data)
);
