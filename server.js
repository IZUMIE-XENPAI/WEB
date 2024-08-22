import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Send a GET request to /fetch?url=<your-url-here> to fetch HTML');
});

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL parameter is required');
  }
  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send('Failed to fetch the HTML');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
