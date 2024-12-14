// index.js
const express = require('express')
const app = express()
const PORT = 4000


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})


app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:3000/game%20pembanguna%20kota/`);
});

// Export the Express API
module.exports = app