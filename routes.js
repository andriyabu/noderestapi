'use strict';

module.exports = (app) => {
    let homeController = require('./homecontroller');
    let usersController = require('./userscontroller');
    let menusController = require('./menucontroller');

    app.route('/').get(homeController.index);
    app.route('/users').get(usersController.index);
    app.route('/users/:id').get(usersController.show);
    app.route('/users').post(usersController.store);
    app.route('/users/:id').put(usersController.update);
    app.route('/users/:id').delete(usersController.destroy);
    app.route('/menus').get(menusController.index);
    app.route('/menus').post(menusController.store);
    app.route('/menus/:id').get(menusController.show);
    app.route('/menus/:id').put(menusController.update);
    app.route('/menus/:id').delete(menusController.destroy);
}

