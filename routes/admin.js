const server = require('express');

const rootPath = require('../pathFinder/path');

const routes = server.Router();

const users = [];

routes.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'User',
        users: users,
        hasUsers: users.length > 0
    });
});

routes.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});
module.exports = routes;



