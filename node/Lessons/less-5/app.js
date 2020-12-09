const express = require('express');

const app = express();

const db = require('./DataBase').getInstance();

db.initModels();

const { usersRouter, carsRouter } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/cars', carsRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res
    .status(err.code)
    .json(err.message);
});

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('start 5000'));
