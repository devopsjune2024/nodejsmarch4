// Filename: index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('NODEJS ON kubernetes!');
});

app.listen(port, () => {
  console.log(`Running APP ${port}!`);
});
