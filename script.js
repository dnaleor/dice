var yourRoll = prompt("Please enter a number between 1 and 6.\nIf you correctly guess my roll, you win!\nIf you want to quit the game, just hit 'Cancel'.");
var rollDice = function () {
	return Math.floor(Math.random() * 6 + 1);
}
	
if(yourRoll >= 1 && yourRoll <= 6 && yourRoll % 1 == 0) {
		var myRoll = rollDice();
		if(yourRoll == myRoll){
			alert("Congratulations, you win! \n" + "I rolled a " + myRoll + " and you rolled a " + yourRoll + ".");
		}
	while(yourRoll != myRoll) {
		alert("Sorry, you lose. \n" + "I rolled a " + myRoll + " and you rolled a " + yourRoll + ".");
		var yourRoll = prompt("Let's try again! Please enter a number between 1 and 6.\n" + "Or, click 'Cancel' to end the game.");
		var myRoll = rollDice();
		if(yourRoll == myRoll) {
			alert("Congratulations, you win! \n" + "I rolled a " + myRoll + " and you rolled a " + yourRoll + ".");
			yourRoll = myRoll;
		}
		else if (yourRoll == undefined) {
			alert("Thanks for playing!");
			yourRoll = myRoll;
		}
	}
} 

else if (yourRoll == undefined) {
	alert("Thanks for playing!");
}

else {
	alert("That is not a valid entry. Please refresh to try again.");
}

