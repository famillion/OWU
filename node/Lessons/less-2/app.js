const express = require('express');

const app = express();

const exprHandlebars = require('express-handlebars');

const {
    addNewUser,
    // createUsersDB,
    getUsersDBtoArray,
    isLoginUser,
    join,
    registerCheck,
    setUserCookies,
    userLogin,
    userLogout
} = require('./dependencies/dependencies');

// +++++ Create default 20 users DB
// createUsersBD(20);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(process.cwd(), 'public')));

app.set('view engine', '.hbs');
app.engine('.hbs', exprHandlebars({
    defaultLayout: false
}));
app.set('views', join(process.cwd(), 'public'));

app.get('/', ((req, res) => {
    let allUsers = [];
    // eslint-disable-next-line no-return-assign
    getUsersDBtoArray().then((value) => allUsers = value);

    isLoginUser()
        .then((user) => {
            // eslint-disable-next-line no-unused-expressions
            user
                ? res.render('profile', { user, allUsers })
                : res.render('home');
        });
}));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/profile', (req, res) => {
    let allUsers = [];
    // eslint-disable-next-line no-return-assign
    getUsersDBtoArray().then((value) => allUsers = value);

    isLoginUser()
        .then((user) => {
            // eslint-disable-next-line no-unused-expressions
            user
                ? res.render('profile', { user, allUsers })
                : res.redirect('/');
        });
});

app.post('/profile', (req, res) => {
    const { email, pass } = req.body;
    let allUsers = [];
    // eslint-disable-next-line no-return-assign
    getUsersDBtoArray().then((value) => allUsers = value);
    userLogin(email, pass)
        .then((user) => {
            if (user) {
                res.render('profile', { user, allUsers });
                setUserCookies(user).then();

                return;
            }
            res.redirect('/login');
        });
});
let noMail = false;
let noPass = false;
app.get('/register', (req, res) => {
    res.render('register', { noMail, noPass });
});

app.post('/register/newuser', (req, res) => {
    const {
        name, password, email, userName, country, city, streetAddress, about
    } = req.body;
    const user = {
        name, password, email, userName, country, city, streetAddress, about
    };

    noMail = !(email);
    noPass = !(password);

    if (email && password) {
        registerCheck(email)
            .then((flag) => {
                if (!flag) {
                    addNewUser(user).then(() => {
                        setUserCookies(user).then(() => {
                            noMail = false;
                            noPass = false;

                            res.redirect('/profile');
                        });
                    });
                }
            });
    } else {
        noMail = true;
        res.redirect('/register');
    }
});

app.get('/logout', (req, res) => {
    userLogout();
    res.redirect('/');
});

app.listen(5000);
