const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Echo endpoint
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// Simple hello endpoint
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Not found handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on http://0.0.0.0:3000");
});

