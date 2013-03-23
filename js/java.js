// Project 2 SDI-1303
// Seth White

/*alert(" Welcome to Venice Market place. Best deals in the world!");

var ans = prompt("What is your name sir?");
if (ans) {
	alert("Well then, " + ans + " Welcome, feel free to explore!");
}
else {
	alert("You refused to answer");
}*/

var character = "Peter";
var currentCoins = 4000;
var merchants = ["hideTrader", "dyeTrader", "stoneTrader", "merchant"];
var say = function(message) {console.log(message); };
var maxHealth = 100;
var enemys = ["goblin", "dragon"]; 
var agro = true


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

say(character + " stops to count his coins...");
var currentCoins = 0;
while (currentCoins <= 3750) {
	console.log(currentCoins + " gold coins");
	currentCoins = currentCoins + 100;
};
say("Yes! I have enough coins, I shall continue to shop!");

if (agro = true) {
	say("An enemy has appeared, prepare to fight!");
};

var goblinMain = [
			//health: 
			50,
			//attack:
			 20 + " damage",
			//loot:
			 200 + " gold" ];
			 
 var characterMain = [
			//health: 
			100,
			//attack:
			 50 + " damage",
			//loot:
			 200 ];


if (argo = true) {
	if ( enemys[0] ) {
		say("The enemy is a " + enemys[0]);
		say(enemys[0] + " has hit you for " + goblinMain[1]);
	}
};
var healthNew = 100 - 20;
say( character + " health is at " + healthNew );

say(character + " has hit " + enemys[0] + " for " + characterMain[1]);

var goblinNew = 50 - 50;
say( enemys[0] + " health is at " + goblinNew );
say( enemys[0] + " is dead.");
say( character + " looted " + goblinMain[2] );











	



