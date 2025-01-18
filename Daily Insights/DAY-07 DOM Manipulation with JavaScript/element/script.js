// Select the button and the container to append the new element
const addElementButton = document.getElementById('addElementButton');
const newElementContainer = document.getElementById('newElementContainer');

// Event listener to create and append a new paragraph
addElementButton.addEventListener('click', function() {
  // Create a new <p> element
  const newParagraph = document.createElement('p');
  
  // Add text content to the new paragraph
  newParagraph.textContent = 'This is a newly added paragraph!';
  
  // Append the new paragraph to the container
  newElementContainer.appendChild(newParagraph);
});
