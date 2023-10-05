//JavaScript Chapter 35 To 38 //
//ch 35//
//q1//
function displayDateTime() {
  document.body.innerHTML = new Date().toLocaleString();
}

displayDateTime();
//q2//
function greetUser(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return `Hello, ${fullName}!`;
}
//q3//
function addNumbers(a, b) {
  return a + b;
}

const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

const sum = addNumbers(num1, num2);

console.log(sum);

//q4//
function calculator(num1, num2, operator) {
  return eval(`${num1}${operator}${num2}`);
}

console.log(calculator(5, 3, '+'));
//q5//
function square(num) {
  return num * num;
}square(4); // returns 16
square(9); // returns 81
square(12); // returns 144

//q6//
function computeFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(computeFactorial(0)); // Output: 1
console.log(computeFactorial(5)); // Output: 120
console.log(computeFactorial(10)); // Output: 3628800
//q7//
function displayCounting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

displayCounting(1,10);

//q8//

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) { return x * x; }
  const hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
  return Math.sqrt(hypotenuseSquared);
}
console.log(calculateHypotenuse(3, 4)); // Output: 5
console.log(calculateHypotenuse(5, 12)); // Output: 13

//q9//
function calculateRectangleArea(width, height) {
  const area = width * height;
  return area;
}
//q10//
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

//q11//
function toTitleCase(str) {
  return str.replace(/\b\w/g, function(txt) {
    return txt.toUpperCase();
  });
}

console.log(toTitleCase('the quick brown fox')); // Output: "The Quick Brown Fox"

//q14//

// Function to calculate circumference of a circle
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}

// Function to calculate area of a circle
function calcArea(radius) {
  let area = Math.PI * (radius ** 2);
  console.log(`The area is ${area}`);
}


//To use these functions, simply call them and pass in the radius as an argument://


calcCircumference(5); // Output: The circumference is 31.41592653589793
calcArea(5); // Output: The area is 78.53981633974483

//You can replace `5` with any other value for the radius that you want to calculate.//