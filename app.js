const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('hello from the server');
});
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'API is working' });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});