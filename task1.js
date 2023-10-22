function makeToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
      resolve("undefected");
    } else {
      reject("Toy is made but defected");
    }
  });
}
// remove if (status === "undefected")
function sellToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Toy sold in shop");
    } else {
      reject("Toy did not sell");
    }
  });
}

const deliverToys = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("delivered");
    } else {
      reject("Toy was lost on the way to store");
    }
  });
};

// function to set timeout for other functions dynamically

function mySetTimeout(callback, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback().then(resolve).catch(reject);
    }, delay);
  });
}

// call each function with delay. If check is not passed then stop the code
mySetTimeout(makeToys, 3000)
  .then(() => {
    console.log("Toy is made");
    return mySetTimeout(deliverToys, 2000);
  })
  .then(() => {
    console.log("Toy is delivered to store");
    return mySetTimeout(sellToys, 1000);
  })
  .then(() => {
    console.log("Toy is sold in shop");
  })
  .catch((error) => {
    console.log(error);
  });
