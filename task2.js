// Same code but using async and await
function makeToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
      resolve("undefected");
    } else {
      reject("Toy is made but defected");
    }
  });
}

function sellToys(status) {
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
      reject("Toy was lost on the way to the store");
    }
  });
};

// Function to set timeout for other functions dynamically
function mySetTimeout(callback, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback().then(resolve).catch(reject);
    }, delay);
  });
}

// refactor using async/await
async function runToyChain() {
  try {
    const makeStatus = await mySetTimeout(makeToys, 3000);
    console.log("Toy is made");

    const deliverStatus = await mySetTimeout(deliverToys, 2000);
    console.log("Toy is delivered to the store");

    const sellStatus = await mySetTimeout(() => sellToys(makeStatus), 1000);
    console.log("Toy is sold in the shop");
  } catch (error) {
    console.log(error);
  }
}

runToyChain();
