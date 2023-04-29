const server = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = server();

app.set('view engine', 'ejs');

const adminData = require('./routes/admin');
const usersData = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(server.static(path.join(__dirname, 'views')));

app.use(adminData);
app.use(usersData);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
app.listen(3000);