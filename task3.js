// შექმენი quiz თამაში

// დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით

// სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი

// არასწორი პასუხის შემთხვევაში გააწითლე

// ბონუს დავალება:

// გამოიტანე ეკრანზე ქულების რაოდენობა

// ➔ სწორი პასუხის შემთხვევაში დაამატე 1 ქულა

// ➔ არასწორის შემთხვევაში უცვლელი რჩება

const wrongAnswerButtons = document.querySelectorAll(".wronganswer");
const correctAnswerButton = document.querySelector(".correctanswer");
const firstQuestionBtn = document.querySelectorAll(".question1btn");

const wrongAnswerButtons2 = document.querySelectorAll(".wronganswer2");
const correctAnswerButton2 = document.querySelector(".correctanswer2");
const secondQuestionBtn = document.querySelectorAll(".question2btn");

const wrongAnswerButtons3 = document.querySelectorAll(".wronganswer3");
const correctAnswerButton3 = document.querySelector(".correctanswer3");
const thirdQuestionBtn = document.querySelectorAll(".question3btn");
const score = document.getElementById("score");
let count = 0;

function handleQuestions(questionBtns, correctAnswerBtn) {
  questionBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      clickedButton.style.backgroundColor =
        clickedButton === correctAnswerBtn ? "green" : "red";

      count += clickedButton === correctAnswerBtn ? 1 : 0;
      updateScore();

      questionBtns.forEach((answer) => {
        if (answer !== clickedButton) {
          answer.disabled = true;
        }
      });
    });
  });
}

const questionSet1 = {
  questionBtns: firstQuestionBtn,
  correctAnswerBtn: correctAnswerButton,
};

const questionSet2 = {
  questionBtns: secondQuestionBtn,
  correctAnswerBtn: correctAnswerButton2,
};

const questionSet3 = {
  questionBtns: thirdQuestionBtn,
  correctAnswerBtn: correctAnswerButton3,
};

handleQuestions(questionSet1.questionBtns, questionSet1.correctAnswerBtn);
handleQuestions(questionSet2.questionBtns, questionSet2.correctAnswerBtn);
handleQuestions(questionSet3.questionBtns, questionSet3.correctAnswerBtn);

const updateScore = () => {
  score.textContent = count;
};

// // dauaros yvela knopkas da miabaas momsmeni yvela knoopkaze ganaxorcielos mititebuli funkcia
// //bad practice
// firstQuestionBtn.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     //eventidan amoigos is knopka romelsac daechira
//     const clickedButton = event.target;
//     //tu daechira swor pasuxs gaamwvanos pasuxi tu mcdaria gaawitlos
//     clickedButton.style.backgroundColor =
//       clickedButton === correctAnswerButton ? "green" : "red";

//     count += clickedButton === correctAnswerButton ? 1 : 0;
//     updateScore();
//     //dauaros yvela knopkas da gatishos yvela knopka
//     firstQuestionBtn.forEach((answer) => {
//       if (answer !== clickedButton) {
//         answer.disabled = true;
//       }
//     });
//   });
// });

// //bad practice
// secondQuestionBtn.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     //eventidan amoigos is knopka romelsac daechira
//     const clickedButton = event.target;
//     //tu daechira swor pasuxs gaamwvanos pasuxi tu mcdaria gaawitlos
//     clickedButton.style.backgroundColor =
//       clickedButton === correctAnswerButton2 ? "green" : "red";

//     count += clickedButton === correctAnswerButton2 ? 1 : 0;
//     updateScore();
//     //dauaros yvela knopkas da gatishos yvela knopka
//     secondQuestionBtn.forEach((answer) => {
//       if (answer !== clickedButton) {
//         answer.disabled = true;
//       }
//     });
//   });
// });

// //bad practice
// thirdQuestionBtn.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     //eventidan amoigos is knopka romelsac daechira
//     const clickedButton = event.target;
//     //tu daechira swor pasuxs gaamwvanos pasuxi tu mcdaria gaawitlos
//     clickedButton.style.backgroundColor =
//       clickedButton === correctAnswerButton3 ? "green" : "red";

//     count += clickedButton === correctAnswerButton3 ? 1 : 0;
//     updateScore();
//     //dauaros yvela knopkas da gatishos yvela knopka
//     thirdQuestionBtn.forEach((answer) => {
//       if (answer !== clickedButton) {
//         answer.disabled = true;
//       }
//     });
//   });
// });

// const updateScore = () => {
//   score.textContent = count;
// };
