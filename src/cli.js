import readLineSync from 'readline-sync';
function greetUser() {
	const name = readLineSync.question("May I have tour name?");
	console.log("Hello" + ", " + name + "!");
};

export { greetUser };


