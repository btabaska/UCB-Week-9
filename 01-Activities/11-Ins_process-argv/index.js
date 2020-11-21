// returns an array of command line arguments
console.log(process.argv.splice(2, process.argv.length).join(" "));

//node index.js this is a message

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);
