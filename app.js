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
