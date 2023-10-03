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
