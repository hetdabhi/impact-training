// Initialize game variables
let targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

// DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

// Event listener for the guess button
guessButton.addEventListener('click', function () {
    const guess = parseInt(guessInput.value);

    // Check if the input is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++; // Increment attempts
    attemptsDisplay.textContent = attempts; // Update the attempts display

    if (guess < targetNumber) {
        message.textContent = "Too low! Try again.";
    } else if (guess > targetNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessButton.disabled = true; // Disable the guess button after winning
    }

    // Clear the input field after each guess
    guessInput.value = '';
    guessInput.focus();
});
