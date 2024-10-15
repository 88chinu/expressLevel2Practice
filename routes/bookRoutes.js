const express = require('express');
const book = require('../models/bookModels.js');

const router = express.Router();

// GET /books
router.get('/books', async (req, res) => {
  try {
    const Books = await book.find();
    res.json(Books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve the books' });
  }
});

// GET /books/:id
router.get('/books/:id', async (req, res) => {
  try {
    const Books = await book.findById(req.params.id);
    if (!Books) {
      return res.status(404).json({ error: 'Book is not found' });
    }
    res.json(Books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve the book' });
  }
});

// POST /books
router.post('/books', async (req, res) => {
  try {
    const newBook = await book.create(req.body);
    res.status(201).json(newBook); // Fixed variable name here
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: 'Failed to add book' }); // Fixed error message
  }
});

// PUT /books/:id
router.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book is not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the book' });
  }
});

// DELETE /books/:id
router.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await book.findByIdAndDelete(req.params.id); // Fixed reference to 'book'
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book is not found' });
    }
    res.json({ message: 'Book is deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the book' });
  }
});

// Export the router
module.exports = router;
