// Random dice roll function
var rollDice = function () {
	return Math.floor(Math.random() * 6 + 1);
}

// Win function
var win = function () {
	numberOfWins += 1;
	document.getElementById("wins").innerHTML = ("Wins: " + numberOfWins);
}

var wins = 0;
var losses = 0;
var percent = 0;

// user selection of 1-6 or random number
function setNumber (x) {
	document.getElementById("yourRoll").innerHTML = ("Your Roll: " + x + ".");
	myNum = rollDice();
	document.getElementById("myRoll").innerHTML = ("My Roll: " + myNum + ".");
	if (x == myNum) {
		document.getElementById("result").innerHTML = ("You win!");
		wins += 1;
	} else {
		document.getElementById("result").innerHTML = ("Sorry, please try again.");
		losses += 1;
	}
};

// Counts number of games played
var gamesPlayed = 0;

var counter = function () {
	gamesPlayed += 1;
	document.getElementById("counter").innerHTML = ("Games Played: " + gamesPlayed);
};

function displayStats(){
	document.getElementById("winloss").innerHTML = ("Wins / Losses: " + wins + " / " + losses);
	document.getElementById("percent").innerHTML = ("Win Percentage: " + wins/gamesPlayed * 100 + "%");
};
