// შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

const button = document.querySelector(".btn");
const modalWrapper = document.querySelector(".wrapper");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  if (
    modalWrapper.style.display === "none" ||
    modalWrapper.style.display === ""
  ) {
    modalWrapper.style.display = "flex";
    modalWrapper.classList.add("wrapper");
    overlay.style.display = "block";
  } else {
    modalWrapper.style.display = "none";
  }
});
