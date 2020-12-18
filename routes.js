'use strict';

module.exports = (app) => {
    let homeController = require('./homecontroller');
    let usersController = require('./userscontroller');

    app.route('/').get(homeController.index);
    app.route('/users').get(usersController.index);
    app.route('/users/:id').get(usersController.show);
}

