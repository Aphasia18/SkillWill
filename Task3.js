// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს

// ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ ყველაფერი
// კარგად არის, გამოიძახოს resolve
// კოპირებული ობიექტით

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (!isObject(obj)) {
      reject(new Error("Input is not an object"));
    } else {
      try {
        const copy = JSON.parse(JSON.stringify(obj));
        resolve(copy);
      } catch (error) {
        reject(error);
      }
    }
  });
}

async function asyncDeepCopy(obj) {
  try {
    const copy = await deepCopyObject(obj);
    return copy;
  } catch (error) {
    throw error;
  }
}

const originalObject = { a: 1, b: { c: 2 } };

asyncDeepCopy(originalObject)
  .then((copy) => {
    console.log("Deep copy:", copy);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
