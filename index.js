const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user12345678:iUgdVb8fbnX4CTZo@cluster0.gxiry.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected'))

app.get('/', (req, res) => {
  res.send({
    name: 'BEN4',
    key: 'abc'
  });
});
app.listen(process.env.PORT, (req, res) => {
  console.log('Server listening on port '+process.env.PORT);
});

// localhost:3000|||127.0.0.1:3000
