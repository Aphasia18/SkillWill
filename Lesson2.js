// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის სახელს

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function findSmollestUser(usersArr) {
  let smollestUser = usersArr[0];

  for (let i = 1; i < usersArr.length; i++) {
    if (usersArr[i].age < smollestUser.age) {
      smollestUser = usersArr[i];
    }
  }
  return smollestUser;
}

const smollestUser = findSmollestUser(users);
console.log(smollestUser);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

function cloneObject(user) {
  const clonedObject = {};

  for (const key in user) {
    clonedObject[key] = user[key];
  }

  return clonedObject;
}

// Example
const originalUser = { name: "Guga", age: 24, city: "Tbilisi" };
const clonedUser = cloneObject(originalUser);

console.log(originalUser);
console.log(clonedUser);

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  let player1roll = 0;
  let player2roll = 0;
  let currentPlayer = 1;

  while (true) {
    const roll = rollDice();
    console.log(`Player ${currentPlayer} rolled: ${roll}`);

    if (currentPlayer === 1) {
      player1roll += roll;
      if (roll === 3) {
        console.log("Player 1 Wins!");
        break;
      }
      currentPlayer = 2;
    } else {
      player2roll += roll;
      if (roll === 3) {
        console.log("Player 2 Wins!");
        break;
      }
      currentPlayer = 1;
    }
  }
}
playGame();
