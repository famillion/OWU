const express = require('express');

const exprHandlebars = require('express-handlebars');

const app = express();

const { join } = require('./services/services');

const { usersRouter, loginLogout } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(process.cwd(), 'public')));

app.set('view engine', '.hbs');
app.engine('.hbs', exprHandlebars({
  defaultLayout: false
}));
app.set('views', join(process.cwd(), 'public'));

app.use('/', loginLogout);

app.use('/users', usersRouter);

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('start 5000'));
