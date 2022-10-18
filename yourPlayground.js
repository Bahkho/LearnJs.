// console.log("hello world");
// console.log("bakare akorede");

// food = Number(prompt("how much was the food"));
// tipPercentage = Number(prompt("tip %")) / 100;
// tipAmount = food * tipPercentage;
// total = food + tipAmount;
// alert(total);
// console.log("total", total);

// let weather = prompt("how is the weather today");
// if (weather == "rainy") {
//   console.log("wear your raincoat");
// } else {
//   console.log("wear your sunglasses");
// }

//                              FUNCTIONS
// function sayMyName2(name) {
//   console.log(name);
// }
// sayMyName2("akorede");

// function greeting(name) {
//   greet = `hi ${name}, nice to meet you!`;
//   console.log(greet);
//   console.log("hi", name, "nice to meet you.");
// }
// greeting("Akorede");

function sum(a, b) {
  return a + b;
}
// console.log(sum(3, 4));

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = sum(food, tipAmount);
  return total;
  //   return sum(food, tipAmount);
}
// console.log(calculateFoodTotal(300, 30));

//                     ARROW FUNCTION WITH EXPLICIT RETURN
const sumArrow = (a, b) => {
  return a + b;
};
// console.log(sumArrow(200, 30));

//                     ARROW FUNCTION WITH IMPLICIT RETURN
const sumArrow2 = (a, b) => a + b;
// console.log(sumArrow2(300, 30));

//                              ARRAYS[]
// const groceries = ["banana", "apple", "orange", "pear"];
// console.log(groceries)
// console.log(groceries[2])
// groceries.push("mango", "guava");
// console.log(groceries);
// ARRAY SLICE
// console.log(groceries.slice(1,4))
// ARRAY INDEXOF
// console.log(groceries.indexOf('pear'))
// ARRAY LENGTH
// console.log(groceries.length)

//                        OBJECTS{}
const person = { name: "Bakare", shirt: "blue" };
// console.log(person.name);
// console.log(person.shirt);

// console.log(person["name"]);
// console.log(person["shirt"]);

person.phone = "1-222-333-4444";
// console.log(person);

const person2 = { name: "Akorede", shirt: "black" };
// console.log(person2.name);
// console.log(person2.shirt);
person2.phone = "1-222-333-5555";
// console.log(person2);

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assests: 100000,
    liabilities: 50000,
    networth: function () {
      return this.assests - this.liabilities;
    },
  };

  return `my name is ${person.name} the color of my shirt is ${
    person.shirt
  } and my net worth is $${person.networth()} USD`;
  //   return `my name is ${name} the color of my shirt is ${shirt}`;
};
// console.log(introducer("Wahab", "Purple"));

// let fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
// ];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
// console.log(fruit)
// }
//                     SUM ALL THE NUMBERS
const numbers = [1, 2, 3, 4, 5, 6, 7];
let result = [];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// TYPE ONE
for (const list of numbers) {
  result.push(list * 2);
}
// console.log(result);
// TYPE TWO
const double = (numbers) => {
  let result = [];
  for (const list of numbers) {
    result.push(list * 2);
  }
  return result;
};
// console.log(double([1, 2, 3, 4, 5, 6, 7]));
// TYPE THREE
function double2(numbers) {
  let result = [];
  for (const list of numbers) {
    result.push(list ** 2);
  }
  return result;
}
// console.log(double2([1, 2, 3, 4, 5, 6, 7]));

// const howManyLetters = (phrase) => {
//   let total = 0;

//   for (const letter in phrase) {
//     console.log(Number(letter) + 1);
//     total = Number(letter) + 1;
//   }
//   return { total };
// };

// [1,2,3,4]
// result=0
// result=1
// result=3
// result=6
// result=10

const sumArray = (numbers) => {
  let result = 0;
  // for loop
  for (const number of numbers) {
    // console.log(number);
    result += number;
  }

  return { result };
};
const nums2 = [1, 2, 3, 4, 5];
// console.log(sumArray(nums));

// function addition(digits) {
//   let total = 0;
//   for (number of digits) {
//     console.log(number);
//     total = total + number;
//   }
//   return { total };
// }
// console.log(addition([5, 6, 7, 8, 9]));

const max = (numbers) => {
  let result = numbers[0];
  for (digits of numbers) {
    if (digits > result) {
      result = digits;
    }
  }
  return { result };
  console.log("result =", result);
};
// console.log(max([6, 3, 4, 9, 7, 8, 2]));
// max([6, 3, 4, 9, 7, 8, 2]);

const letterFrequency = (phrase) => {
  // console.log(phrase);
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};
// console.log(letterFrequency("lol is my lol is"));

const wordFrequency = (phrase) => {
  array = phrase.split(" ");
  return letterFrequency(array);
};
// const userInput = prompt("what is your sentence");
// console.log(wordFrequency(userInput));

// --------------------------MAP----------------------

let result1 = [1, 2, 3, 4, 5, 6, 7].map((doubleMap) => doubleMap * 2);
// console.log(result1)

const doublee = (numbers) => {
  // let result = [];
  // for (const list of numbers) {
  //   result.push(list * 2);
  // }
  // return result;

  return numbers.map((list) => list * 2);
};
// console.log(doublee([1, 2, 3, 4, 5, 6, 7]));

let result2 = [2, 4, 6, 8].map((figures) => figures);
// console.log(result2)

// -----------FILTER---------------
const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
// console.log(filter([1, 2, 3, 4, 5, 6], 2));
// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.filter((num) => num > 3 || num < 2));

const actors = [
  { name: "musa", networth: 200000 },
  { name: "bolu", networth: 7000000 },
  { name: "fola", networth: 30 },
  { name: "akorede", networth: 300000 },
  { name: "ganiu", networth: 10000000 },
  { name: "ola", networth: 500000 },
];
let total = actors.filter((actors) => actors.networth >= 30);
// console.log(total);

let networth = total.map((actors) => actors.networth).join(", ");
// console.log(networth);

// playground.innerHTML = `<h1>${networth}</h1>`;

// --------------------REDUCE-----------
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const nums = [1, 2, 3, 4];
const total1 = nums.reduce(multiply);
// console.log(total1);

// let networth2 = total.map((actors) => actors.networth);
const total2 = actors.reduce((a, b) => a + b.networth, 0);
// console.log(total2);

const randomFruit = (fruits) => {
  const randomNum = Math.floor(Math.random() * fruits.length);
  // console.log(randomNum);
  return fruits[randomNum];
};

// fruits = ["banana", "apple", "orange", "pear"];
// console.log(randomFruit(fruits));

// rainy (1), sunny (-1), overcast (0)
const weatherScorer = (weather, weather2) => {
  let score;

  if (weather == "rainy" && weather2 == "overcast") {
    score = 2;
  } else if (weather == "rainy") {
    score = 1;
  } else if (weather == "sunny") {
    score = -1;
  } else {
    score = 0;
  }

  return score;
};

// console.log(weatherScorer('rainy', 'sunny'))
// https://dog.ceo/api/breeds/image/random
const image = document.getElementById("dogImage");

const refresh = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.message);
      image.innerHTML = `<img src='${json.message}' height=300 width=300>`;
    });
};
const clrBtn = document.getElementById("btn");
clrBtn.onclick = () => refresh();


// document.addEventListener('keydown',(p)=>{
//   if (p.key=='p') {
//    console.log('yoo') 
//   }else{
//     console.log('not p')
//   }
// })