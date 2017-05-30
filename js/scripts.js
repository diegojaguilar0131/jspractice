//Simple calculator

/*

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);


//BMI calculator
var bmiCalculator = function(weight, height) {
  return weight / height;
};

var weight  = parseInt(prompt("Enter your weight"));
var height  = parseInt(prompt("Enter your height"));
var result = bmiCalculator(weight, height);
if (result > 30) {
  alert("You might be obese");
} else if ( result > 25 && result < 30){
  alert("You might be overweight");
} else if ( result > 18.5 && result < 25){
  alert("You might be normal weight");
} else {
  alert("You might be underweight");
}
alert("Your BMI is " + result);

*/

function toCelsius(fahrenheit) {
  return ((5 / 9) * (fahrenheit - 32));
}

function toFahrenheit(celsius) {
  return ((celsius * (9 / 5) + 32))
}

var convert = parseInt(prompt("Enter the number you wish to convert"))
  var input = prompt("Convert fahrenheit or celsius?");
  if ( /c/.test(input) ){
  var result = toCelsius(convert);
} else {
  var result = toFahrenheit(convert);
}

alert(result);
