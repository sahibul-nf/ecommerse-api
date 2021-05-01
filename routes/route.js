'use strict';

module.exports = function(app) {
    const u = require('../controllers/users_controller');
    const i = require('../controllers/index');

    app.route('/index').get(i.index);

    app.route('/users').get(u.users);
    app.route('/users/login').post(u.login);
    app.route('/users/register').post(u.register);
};