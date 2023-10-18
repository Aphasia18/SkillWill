// შექმენი input, სადაც მომხმარებელს შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები, average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და გამოუტანე ეკრანზე

// მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const input = document.getElementById("input");
const button = document.querySelector(".btn");
const finalResult = document.querySelector(".result");

button.addEventListener("click", () => {
  const pattern = /^[0-9:]+$/;
  const inputValue = input.value;
  if (!pattern.test(inputValue)) {
    alert("Please input number separated by colon. Example 1:2:3:4:5");
  } else {
    const inputArr = inputValue.split(":");
    let sum = 0;
    for (let i = 0; i < inputArr.length; i++) {
      sum += parseInt(inputArr[i], 10);
    }
    const average = sum / inputArr.length;
    finalResult.innerText = average;
  }
});
