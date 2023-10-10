// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

const arrayMaker = (arg1, arg2, ...args) => {
  const arr = [];

  // check if argument is number or not
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Insert a number";
  }
  // check if argument is number or not
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      return "Insert a number";
    }
  }

  arr.push(arg1 + arg2);

  let multi = 1;

  for (let arg of args) {
    multi *= arg;
  }
  arr.push(multi);
  return arr;
};

console.log(arrayMaker(5, 3, 5, 2, 1, 73, 3));
console.log(arrayMaker(5, 3));
console.log(arrayMaker(5, 3, 5, 8));

// დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined

const cityFinder = (user) => {
  const { banks: [, { address: { city } = {} }] = [] } = user;
  // as task requires this will return second index of an array.
  // to change that add or delete comma in the begining of destructuring
  return city;
};

const userArr = {
  banks: [
    {
      address: {
        city: "New Dog",
      },
    },
    {
      address: {
        // city: "New Pork"
        // commented to return undefined
      },
    },
    {
      address: {
        city: "New York",
      },
    },
  ],
};

console.log(cityFinder(userArr));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს

// გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას

// გამოიყენეთ (...) ოპერატორი

const deepCopy = (obj) => {
  // check for primitive
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  //check for array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = { ...obj };
  // copy keys of object
  for (const key in copy) {
    if (copy.hasOwnProperty(key)) {
      copy[key] = deepCopy(copy[key]);
    }
  }

  return copy;
};

const originalObject = {
  fruit: "apple",
  citrus: {
    lemon: 2,
    orange: [12, 4],
  },
};

const copied = deepCopy(originalObject);
console.log(copied);
