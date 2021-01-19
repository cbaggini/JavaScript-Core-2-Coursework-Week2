let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 0;
const maxTries = 10;

function guessNumber() {
  //Collect input from the user
	let guess = document.querySelector(".inputs-Values").value;
	let triesTaken = document.querySelector(".Tries-output");
	let output = document.querySelector(".final-output"); 
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
	if (!(guess > 0 && guess <= 100)) {
		output.innerHTML = "Please enter a number between 1 and 100";
	} else if (tries >= maxTries) {
		output.innerHTML = `You lose, the number was ${randomNumber}`;
		triesTaken.innerHTML = "Too many attempts!"
	} else {
		tries++;
		triesTaken.innerHTML = `Tries: ${tries}. You have ${maxTries - tries} attempts left`;
	//If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
		if (guess > randomNumber) {
			output.innerHTML = "Number is too high, try again";
		}
	//If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
		if (guess < randomNumber) {
			output.innerHTML = "Number is too low, try again";
		}
	//If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
		if (guess == randomNumber) {
			output.innerHTML = `You guessed ${randomNumber}. Guess is correct. You win!`;
			triesTaken.innerHTML = `It took you ${tries} attempts to guess the number`
		}
	}
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
	randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  	document.querySelector(".inputs-Values").value = "";
	document.querySelector(".final-output").innerHTML = "Guess a number between 1 and 100"; 
  //Reset tries, and triesTaken by the user
	tries = 0;
	document.querySelector(".Tries-output").innerHTML = "";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);