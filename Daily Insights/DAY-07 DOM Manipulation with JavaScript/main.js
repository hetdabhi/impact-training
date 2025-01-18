// Select the elements using their IDs
const changeTextButton = document.getElementById('changeTextButton');
const changeColorButton = document.getElementById('changeColorButton');
const messageDiv = document.getElementById('message');

// Event listener to change the text of the messageDiv
changeTextButton.addEventListener('click', function() {
  messageDiv.textContent = 'Welcome!';
});

// Event listener to change the background color of the body
changeColorButton.addEventListener('click', function() {
  document.body.style.backgroundColor = '#00a9fd';  // Light green background
});
