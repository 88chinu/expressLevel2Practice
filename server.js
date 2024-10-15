const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const postRoute = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage Of The App");
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Store this in MongoDB for future reference
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if this matches what's in MongoDB
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

app.use('/api', bookRoutes); // Use book routes with prefix '/api'
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});