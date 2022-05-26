const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user12345678:iUgdVb8fbnX4CTZo@cluster0.gxiry.mongodb.net/test11?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected'));

const StudentModel = require('./StudentModel');

app.get('/', async (req, res) => {
   await StudentModel.insertMany([
     { name: 'Nguyen Van A', email: 'a@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' },
     { name: 'Nguyen Van B', email: 'b@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' }
    ]);
   const studentA = await StudentModel.find({
      email: 'a@gmail.com'
    });
   return res.send({
      name: 'BEN4',
      key: 'abc',
      student: studentA
    });
});
app.listen(process.env.PORT, (req, res) => {
  console.log('Server listening on port '+process.env.PORT);
});

// localhost:3000|||127.0.0.1:3000
