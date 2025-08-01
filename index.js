const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json(data.intern);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(data.leaderboard);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
