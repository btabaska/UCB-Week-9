sameCheck = (arg1, arg2) => {
  return arg1 === arg2 ? true : false;
};

console.log(sameCheck(process.argv[2], process.argv[3]));
