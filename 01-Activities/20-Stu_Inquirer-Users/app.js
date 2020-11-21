const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "userName",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "userLanguage",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "userMethod",
    },
  ])
  .then((data) =>
    fs.writeFile(`${data.userName}'s Info`, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log("finished");
    })
  );
