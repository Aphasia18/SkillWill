// დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”

// გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function isEqual(a, b) {
  if (a === b) {
    console.log("Equal");
  } else console.log("Not Equal");
}

isEqual(5, 5);
isEqual(2, 6);
isEqual(5, "5");

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში

// თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

function convertFtoC(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(celsius);
  }
}

convertFtoC(66);
convertFtoC(0);
convertFtoC(-5);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული
// ოპერაციით

// თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი,
// ოპერაცია დააბრუნე - false

function performOperation(a, b, operation) {
  if (typeof a !== "number") {
    return false;
  }
  if (typeof b !== "number") {
    return false;
  }

  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return "Division by zero is not allowed.";
    }
    return a / b;
  } else {
    return 'Please use "+", "-", "*", or "/".';
  }
}

console.log(performOperation(5, 4, "+"));
console.log(performOperation(5, 5, "."));
console.log(performOperation(true, 4, "+"));
