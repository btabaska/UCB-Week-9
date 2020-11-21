const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2, 7];
console.log(combined);

const sayArgs = (...args) => {
  console.log(args);
};

sayArgs("Hi", "bye", "morning");

let me = {
  name: "brandon",
  password: "pass",
  age: "29",
};

let copyMe = { ...me, name: "bob", age: "80" };

console.log(copyMe);
