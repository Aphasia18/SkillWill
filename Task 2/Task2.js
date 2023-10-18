// შექმენი input და button

// input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად

// (ფერები რომლის ჩაწერაც შეუძლია: red, blue, green, black, white)
// თუ სხვა ფერი ჩაწერა, გამოუტანე შეტყობინება alert-ის საშუალებით

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const givenColor = input.value;
  if (
    givenColor === "red" ||
    givenColor === "blue" ||
    givenColor === "green" ||
    givenColor === "black" ||
    givenColor === "white"
  ) {
    document.body.style.backgroundColor = givenColor;
  } else {
    alert("Invalid color. Please enter red, blue, green, black, or white.");
  }
});
