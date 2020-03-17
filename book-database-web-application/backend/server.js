const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB data connection established successfully');
});

const books = require('./routes/books');
const users = require('./routes/users');

app.use('/books', books);
app.use('/users', users);

app.listen(port, () => {
    console.log('Server is running on port:  ${port}');
});

