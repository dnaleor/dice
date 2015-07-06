// Random dice roll function
var rollDice = function () {
	return Math.floor(Math.random() * 6 + 1);
}

// user selection of 1-6 or random number
function setNumber (x) {
	document.getElementById("yourRoll").innerHTML = ("Your Roll: " + x + ".");
	myNum = rollDice();
	document.getElementById("myRoll").innerHTML = ("My Roll: " + myNum + ".");
	if (x == myNum) {
		document.getElementById("result").innerHTML = ("Result: You win!");
	} else {
		document.getElementById("result").innerHTML = ("Result: Sorry, please try again.");
	}
};





