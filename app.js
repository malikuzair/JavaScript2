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