// Project 2 SDI-1303
// Seth White

var character = "Peter";
var currentCoins = 4000;
var merchants = ["hideTrader", "dyeTrader", "stoneTrader", "merchant"];
var say = function(message) {console.log(message); };


var getGreetingByName = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay,
		greeting;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "evening"; }
	greeting = "Good " + timeOfDay + ", " + name + " welcome to the marketplace!";	
	return greeting;	
};

var fullGreeting = getGreetingByName(character);
console.log(fullGreeting);

say("**" + character + " walks over to the " + merchants[0] + "**");

say("Welcome to my shop " + character + " I have the best hides you can buy!");


 currentCoins = function(givenGold) {
	var pricePerHide = 5,
		skinnedHide;
	if (givenGold < pricePerHide) {
		skinnedHide = 0;
	}
	else {
		skinnedHide = Math.floor(givenGold / pricePerHide);
	}
	return skinnedHide;
};

var totalHides = currentCoins(50 * 5);
console.log("Thanks for buying " + totalHides + " perfect hides!");

say("please come again " + character + "!");

var currentCoins = 3750;

say("**" + character + " stops to go home!**");


	



