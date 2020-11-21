const sum = (numOne, numTwo) => {
  return parseInt(numOne) + parseInt(numTwo);
};

const difference = (numOne, numTwo) => {
  return parseInt(numOne) - parseInt(numTwo);
};

const product = (numOne, numTwo) => {
  return parseInt(numOne) * parseInt(numTwo);
};

const quotient = (numOne, numTwo) => {
  return parseInt(numOne) / parseInt(numTwo);
};

module.exports = {
  sum,
  difference,
  product,
  quotient,
};
