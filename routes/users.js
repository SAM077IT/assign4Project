const server = require('express');

const rootPath = require('../pathFinder/path');

const routes = server.Router();



routes.get('/', (req, res, next) => {
    res.render('home', { pageTitle: 'Home' });
});

module.exports = routes;

