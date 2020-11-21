const setTimer = (sec) => {
  return new Promise((resolve, reject) => {
    if (typeof sec != "number") {
      reject("must pass a number");
    } else {
      setTimeout(() => {
        resolve("timer is done");
      }, sec * 1000);
    }
  });
};

// setTimer(5)
//   .then((res) => {
//     console.log(res);
//     return setTimer(2);
//   })
//   .then((res2) => {
//     console.log(res2);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(setTimer(2));

(async () => {
  try {
    const timerRes = await setTimer(2);
    console.log(timerRes);
  } catch (err) {
    console.log(err);
  }
})();

const timerAsync = async () => {
  try {
    const timerRes = await setTimer(2);
    console.log(timerRes);
  } catch (err) {
    console.log(err);
  }
};

timerAsync();
