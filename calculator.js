//Prompts
var calculator = prompt('Hello, this is your calculator ready to solve your maths problems! Just type add to ADD, sub to SUBTRACT, mul to MULTIPLY, div to DIVIDE, powers for POWERS and pi for PI.');
var firstNum = prompt('Please enter your first number');
var secondNum = prompt('Please enter your second number');
//var radius = prompt('Please enter a radius number');

//Operations
var add = 'add';
var sub = 'subtract';
var mul = 'multiply';
var div = 'divide';
var powers = 'powers';
var pi = 'pi';

//Calculator functionality
if (calculator == 'add') {
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	alert('Your answer is: ' + firstNum + secondNum);
} else if (calculator == 'sub') {
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	alert('Your answer is: ' + firstNum - secondNum);
} else if (calculator == 'mul') {
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	alert('Your answer is: ' + firstNum * secondNum);
} else if (calculator == 'div') {
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	alert('Your answer is: ' + firstNum / secondNum);
} else if (calculator == 'powers') {
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	alert('Your powers answer is: ' + Math.pow(firstNum, secondNum));
} else {
	alert('Please insert a number');
}

// Pi operation.
// if (calculator == 'pi') {
// 	radius = parseFloat(radius);
// 	alert('Your diameter is' + Math.pi(radius * 2) + 'cm.');
// }