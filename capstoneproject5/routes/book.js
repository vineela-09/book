// routes/books.js
const express = require('express');
const router = express.Router();

// Example route to get books
router.get('/', (req, res) => {
    res.send('List of books');
});

// Example route to add a book
router.post('/', (req, res) => {
    res.send('Add a new book');
});

module.exports = router;
