//Prompts
var calculator = prompt('Hello, this is your calculator ready to solve your maths problems! Just type "add" to add, "sub" to subtract, "mul" to multiply and "div" to divide! ');
var firstNum = prompt('Please enter your first number');
var secondNum = prompt('Please enter your second number');

//Operations
var add = 'add';
var sub = 'subtract';
var mul = 'multiply';
var div = 'divide';

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
} else {
	alert('Please insert a number');
}