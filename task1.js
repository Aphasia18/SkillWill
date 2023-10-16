// შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id

// <div> - ში ჩაწერე პატარა random ტექსტი

// ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი

const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  text.style.display = "none";
});
