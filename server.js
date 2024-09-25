const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
// const { useState } = require ('express');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage Of The App");
});

// Example route to get books
app.get('/api/books', async (req, res) => {
    try {
        const books = await getBooksFromDatabase(); // You would replace this with actual DB call
        res.json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
});


// app.get(
//     `localhost:3000/api/books${id}`).then(res => 
//      {
//      console.log(res.data.books);
//      setBooks(res.data.books);
//  })

app.use('/api', bookRoutes); // Use book routes with prefix '/api'

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});