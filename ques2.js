const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to calculate the average of a list of numbers
app.post('/calculate-average', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Please provide a non-empty array of numbers.' });
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    res.json({ average });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
