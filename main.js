// // Задание 1

// let met, km, met1, km1; 
//   km = prompt(" v1 в км/ч");
//   met1 = km * (5 / 18);
//   met = prompt("v2 в м/с");
//   km1 = met * 3.6;
//   console.log( `${km} км/ч соответствуют ${met1} м/с, а ${met} м/с соответствуют ${km1} км/ч`);


// // Задание 2

// let first = 5;
// let two = 2;
// let tree = 6;
// if (two + tree > first && first + tree > two && first + two > tree) {
//   console.log("трегольник существует");
//   let Per = first + two + tree;
//   console.log("периметр= " + Per);
//   let S = Math.sqrt(Per * (Per - first) * (Per - two) * (Per - tree));
//   console.log("площадь= " + S);
//   let ot = Per / S;
//   console.log("отношение= " + ot);
// } else {
//   console.log("трегольник не существует");
// }
 
// // Задание 3

// let input1 = prompt();
// for (let i = 0; i < input; i++) {
//   if (i == 0) {
//     console.log(i + " buzz");
//   } else if (i % 5 == 0) {
//     console.log(i + " fizz buzz");
//   } else if (i % 2 == 0) {
//     console.log(i + " buzz");
//   } else {
//     console.log(i + " fizz");
//   }
// }

// // Задание 4

// let g = "";
// let r = "";
// for (let i = 0; i < 20; i++) {
//   r = "";
//   if (i % 2 == 0) {
//     for (let a = 0; a < i; a++) {
//       r += "#";
//     }
//   } else {
//     for (let c = 0; c < i; c++) {
//       r += "*";
//     }
//   }
//   g += r + "\n";
// }
// console.log(g + "||");

// // Задание 5

// var a = 10;
// var b = prompt("введите число");

// while (b != a) {
//   if (isNaN(b)) {
//     console.log("это не число");
//     b = prompt("введите число");
//   } else if (b > a) {
//     console.log("ваше число больше");
//     b = prompt("введите число");
//   } else {
//     console.log("ваше чило меньше");
//     b = prompt("введите число");
//   }
// }
// console.log("угадано");

// // Задние 6

// let n = prompt("число n");
// let x = prompt("число x");
// let y = prompt("число y");
// if (n <= 0 && x <= 0 && y <= 0) {
//   console.log("числа должны быть больше 0");
// } else if (n % x == 0 && n % y == 0) {
//   console.log("n = " + n + ", x = " + x + ",y = " + y + " => true");
// } else {
//   console.log("n = " + n + ", x = " + x + ",y = " + y + " => false");
// }

// // Задание 7

// let month = prompt("введите номер месяца");
// if (month == 1 || month == 2 || month == 3) {
//   console.log("месяц " + month + " => 1 квартал");
// } else if (month == 4 || month == 5 || month == 6) {
//   console.log("месяц " + month + " => 2 квартал");
// } else if (month == 7 || month == 8 || month == 9) {
//   console.log("месяц " + month + " => 3 квартал");
// } else if (month == 10 || month == 11 || month == 12) {
//   console.log("месяц " + month + " => 4 квартал");
// } else {
//   console.log("месяц не сущестыует");
// }



// Задание 1

function convertSpeed(speed, convertTo) {
  let finalSpeedMS = speed/convertTo;
  let finalSpeedKMH = speed * convertTo; 
  console.log(`convertSpeed( ${speed} км/ч 'toMS') -> ${finalSpeedMS} м/с`);
  console.log(`convertSpeed( ${speed} м/с 'toKMH') -> ${finalSpeedKMH} км/ч`);
}
convertSpeed(36, 3.6);

// Задание 2

function absValue(number){
  if (number<0){ 
      console.log(`|${number}|=${number-(number*2)}`);
  }
  else{
      console.log(`|${number}|=${number}`);
  }
}
absValue(-2);
absValue(0);
absValue(5);

// Задание 3

let student = {
  group: "211-326",
  last_name: "Софьин",
  first_name: "Егор",
  } 
  console.log(`group; last_name; first_name.`);
  console.log(`Студент ${student.last_name} ${student.first_name} учится в группе № ${student.group}`);


// Задание 4

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);
  const rndInt2 = randomIntFromInterval(1, 50);
  console.log(rndInt2);

// Задание 5


function sampleArray(arr, a){
  let mass = new Array();
  for (let i=0; i<a; i++){
      let l = arr[randomIntFromInterval(0, arr.length)];
      mass.push(l); 
  }
  return mass;
}
let b = prompt('введите число от 1 до 9');
let arr= [13,12,45,234,308,734,283,246,438];
console.log(sampleArray(arr,b));