const express = require('express');
const app = express();
const port = 1000;

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory "database"
let books = [];
let nextId = 1;

// Root Route
app.get('/', (req, res) => {
  res.send('Hello - Het Dabhi');
});

// Routes

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: 'Title, author, and year are required' });
  }
  const newBook = { id: nextId++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { title, author, year } = req.body;
  books[bookIndex] = { id: bookId, title: title || books[bookIndex].title, author: author || books[bookIndex].author, year: year || books[bookIndex].year };
  res.json(books[bookIndex]);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(bookIndex, 1);
  res.status(204).send(); // No content
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
