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