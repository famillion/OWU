const express = require('express');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const { authRouter, carsRouter, usersRouter } = require('./routes');

const app = express();
const db = require('./DataBase').getInstance();

db.initModels();

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/cars', carsRouter);
app.use('/users', usersRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res
    .status(err.code || 500)
    .json(err.message);
});

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('start 5000'));
