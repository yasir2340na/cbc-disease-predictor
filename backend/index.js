// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Placeholder route for CBC extraction (you can implement real logic or ML model later)
app.post('/api/extract-cbc', (req, res) => {
  const { text } = req.body;

  // For now, just return the raw text received (or simulate extraction if needed)
  res.json({
    message: 'CBC extraction is not implemented yet.',
    input: text
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
