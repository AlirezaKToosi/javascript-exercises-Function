function greeting1() {
  console.log("Hello there my friend!");
}
greeting1();
//****************************************************/
function greeting2(name) {
  console.log(`Hello there my friend! You must be ${name}!`);
}
greeting2("Alireza");
//****************************************************/
function addition(num1, num2) {
  return num1 + num2;
}
var result = addition(10, 8);
console.log(result);
//****************************************************/
function division(num1, num2) {
  return num1 / num2;
}
let num1 = window.prompt(
  "Welcome to division program. please enter the first number:"
);
let num2 = window.prompt("Enter the second number:");
if (num2 == 0) {
  window.alert("Second number should not be zero");
} else {
  var result = division(num1, num2);
  window.alert(`The result is => ${num1}/${num2}=${result}`);
}
//****************************************************/
function Area(length, width) {
  return length * width;
}
window.alert("Welcom to box area calculator");
let length = window.prompt("please enter the length of the box:");
let width = window.prompt("please enter the width  of the box:");
var area = Area(length, width);
window.alert(`The Area of the box is => ${area}`);

//****************************************************/
function greeting3(firsname, lastname) {
  window.alert(`Hello ${firsname} ${lastname}! How are you doing? !`);
}
let firsname = window.prompt("please enter your firstname");
let lastname = window.prompt("please enter your lastname");
greeting3(firsname, lastname);
//****************************************************/
function converter(Distance) {
  return Distance * 0.621371192;
}
window.alert("Welcom to distance converter");
let distance = window.prompt("please enter the distancen in kilometer:");
var distanceMile = converter(distance);
window.alert(`The distance in mile is  => ${distanceMile}`);

//****************************************************/
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
window.alert("Welcom to tempratur converter");
let celsiusTemperature = window.prompt("please enter the tempratur in celsius:");
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
window.alert(`Temperature in Celsius: ${celsiusTemperature}°C`);
window.alert(`Temperature in Fahrenheit: ${fahrenheitTemperature}°F`);
//****************************************************/
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

const numbersArray = [10, 20, 30, 40, 50];
const meanValue = calculateMean(numbersArray);
console.log(`Mean Value: ${meanValue}`);
//****************************************************/
function checkAge(age) {
  if (age >= 0 && age <= 14) {
    return "Get out of here!";
  } else if (age >= 15 && age <= 17) {
    return "Sorry, you are not old enough";
  } else if (age >= 18 && age <= 19) {
    return "Sorry, you must be at least 20. Why don't you try a bar instead?";
  } else if (age >= 20 && age <= 80) {
    return "Thank you! Welcome!";
  } else {
    return "I'm sorry, where is your caretaker?";
  }
}

const ageToCheck = 25;
console.log(checkAge(ageToCheck));
//****************************************************/
function calculateSum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

const tenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumResult = calculateSum(tenNumbersArray);
console.log(`Sum of 10 Numbers: ${sumResult}`);
//****************************************************/
const person = {
  name: "John Doe",
  age: 30,
  city: "Example City",
  skills: ["Web Development", "Data Analysis", "Graphic Design", "Photography", "Language Translation"]
};

function listSkills(person) {
  console.log(`Skills of ${person.name}:`);
  person.skills.forEach((skill, index) => {
    console.log(`${index + 1}. ${skill}`);
  });
}

listSkills(person);
//****************************************************/