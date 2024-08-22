const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/get-html', async (req, res) => {
    const { url } = req.body;

    try {
        const response = await fetch(url);
        const html = await response.text();
        res.json({ html });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch HTML' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
