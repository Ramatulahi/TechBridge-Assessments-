// Elements for user and computer picks
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const yourPick = document.getElementById("YourPick");
const computerPick = document.getElementById("ComputerPick");

const yourScoreE = document.getElementById("yourScore");
const compScoreE = document.getElementById("compScore");

// Computer's pick options
const options = ["Rock", "Scissors", "Paper"];

// Arrays to store the score of user and computer
const Compscore = [];
const yourScore = [];

// Event Listener for 'Rock' button
rockButton.addEventListener('click', () => {
    console.log("Rock clicked");
    yourPick.innerHTML = "Your pick: " + rockButton.value;
    yourPick.className = "h5"; // Apply custom styling for the pick display

    const random = Math.floor(Math.random() * options.length); // Random computer pick
    const pick = options[random];
    console.log("Computer picked:", pick);
    rockResult(pick); // Call the result function for Rock
});

// Event Listener for 'Paper' button
paperButton.addEventListener('click', () => {
    console.log("Paper clicked");
    yourPick.innerHTML = "Your pick: " + paperButton.value;
    yourPick.className = "h5"; // Apply custom styling for the pick display

    const random = Math.floor(Math.random() * options.length); // Random computer pick
    const pick = options[random];
    console.log("Computer picked:", pick);
    papResult(pick); // Call the result function for Paper
});

// Event Listener for 'Scissors' button
scissorsButton.addEventListener('click', () => {
    console.log("Scissors clicked");
    yourPick.innerHTML = "Your pick: " + scissorsButton.value;
    yourPick.className = "h5"; // Apply custom styling for the pick display

    const random = Math.floor(Math.random() * options.length); // Random computer pick
    const pick = options[random];
    console.log("Computer picked:", pick);
    scissorsResult(pick); // Call the result function for Scissors
});

// Result functions for each button (Rock, Paper, Scissors)
function rockResult(pick) {
    const div = document.getElementById("result");
    const p = document.createElement("p");
    div.appendChild(p);

    // Set computer's pick display
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5"; // Styling for computer pick
    }, 500);

    setTimeout(() => {
        if (pick === rockButton.value) {
            console.log("Draw");
            p.innerHTML = "Draw!";
        } else if (pick === "Paper") {
            console.log("Computer wins!");
            p.innerHTML = "Computer wins!";
            // Update computer score
            Compscore.push("computer");
            updateScores();
        } else {
            console.log("You win!");
            p.innerHTML = "You win!";
            // Update your score
            yourScore.push("you");
            updateScores();
        }
    }, 1000);
}

function papResult(pick) {
    const div = document.getElementById("result");
    const p = document.createElement("p");
    div.appendChild(p);

    // Set computer's pick display
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5"; // Styling for computer pick
    }, 500);

    setTimeout(() => {
        if (pick === paperButton.value) {
            console.log("Draw");
            p.innerHTML = "Draw!";
        } else if (pick === "Rock") {
            console.log("You win!");
            p.innerHTML = "You win!";
            // Update your score
            yourScore.push("you");
            updateScores();
        } else {
            console.log("Computer wins!");
            p.innerHTML = "Computer wins!";
            // Update computer score
            Compscore.push("computer");
            updateScores();
        }
    }, 1000);
}

function scissorsResult(pick) {
    const div = document.getElementById("result");
    const p = document.createElement("p");
    div.appendChild(p);

    // Set computer's pick display
    setTimeout(() => {
        computerPick.innerHTML = "Computer's pick: " + pick;
        computerPick.className = "h5"; // Styling for computer pick
    }, 500);

    setTimeout(() => {
        if (pick === scissorsButton.value) {
            console.log("Draw");
            p.innerHTML = "Draw!";
        } else if (pick === "Rock") {
            console.log("Computer wins!");
            p.innerHTML = "Computer wins!";
            // Update computer score
            Compscore.push("computer");
            updateScores();
        } else {
            console.log("You win!");
            p.innerHTML = "You win!";
            // Update your score
            yourScore.push("you");
            updateScores();
        }
    }, 1000);
}

// Function to update and display scores
function updateScores() {
    const cScore = Compscore.length;
    const yScore = yourScore.length;

    compScoreE.innerHTML = "Computer Score: " + cScore + " points";
    yourScoreE.innerHTML = "Your score: " + yScore + " points";
}

// Overall Result function (End of the game)
const overall = document.getElementById("overall");
overall.addEventListener("click", computeOresult);

function computeOresult() {
    console.log("Overall Result clicked");
    console.log("Your score:", yourScore.length);
    console.log("Computer score:", Compscore.length);

    if (yourScore.length > Compscore.length) {
        alert('You win the game!');
    } else if (Compscore.length > yourScore.length) {
        alert('You lose the game!');
    } else {
        alert('It\'s a tie!');
    }
}
