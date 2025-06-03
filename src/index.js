const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const { homeController } = require('./controllers/home');
const { loginGet, loginPost, logoutGet, registerGet, registerPost } = require('./controllers/auth');
/* const { router } = require('./controllers/home');
const { sessionRouter } = require('./controllers/session'); */

const secret = 'Super Secret';

const app = express();
const hbs = handlebars.create({
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.use(session({
    secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }/* false, защото използвам http, иначе е true */
}));

/* app.use(router); */
/* app.use(sessionRouter); */

app.get('/', homeController);
app.get('/register', registerGet);
app.post('/register', registerPost);
app.get('/login', loginGet);
app.post('/login', loginPost);
app.get('/logout', logoutGet);

app.listen(3000, () => console.log('Server started'));