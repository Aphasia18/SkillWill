// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს

// არ გამოიყენო string.replace() ფუნქცია

const stringReplacer = (string, valueToReplace, valueToReplaceWith) => {
  let result = "";
  let currentIndex = 0;

  while (true) {
    // index of word which I want to replace. searchimg from index 0 anu beginning of sentence
    const index = string.indexOf(valueToReplace, currentIndex);

    //if index of word I want to replace is not found add remaining part of the sentence
    if (index === -1) {
      result += string.substring(currentIndex);
      break;
    }

    // add sentance before word I want to replace
    result += string.substring(currentIndex, index);
    // add word with which im replacing
    result += valueToReplaceWith;
    //update index to find if word repeats again
    currentIndex = index + valueToReplace.length;
  }

  return result;
};

const originalString = "იყო არაბეთს როსტევან, კაროლი ღმრთისაგან სვიანი";
const newString = stringReplacer(originalString, "კაროლი", "მეფე");
console.log(originalString);
console.log(newString);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const makeItCap = (sentance) => {
  return sentance.toUpperCase();
};

const originalSentence = "this is lowerkeys buy it's gonna be upper";
const uppercaseSentance = makeItCap(originalSentence);

console.log(originalSentence);
console.log(uppercaseSentance);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით

//შეგიძლია გამოიყენო sort() ფუნქცია

const sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
  return arr;
};

const people = [
  { name: "kaci1", age: 30 },
  { name: "kaci2", age: 25 },
  { name: "kaci3", age: 40 },
  { name: "kaci4", age: 22 },
];

const sortedByAge = sortByAge(people);
console.log(sortedByAge);
