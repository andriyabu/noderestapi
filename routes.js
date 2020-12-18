'use strict';

module.exports = (app) => {
    let mycontroller = require('./controller');

    app.route('/').get(mycontroller.index);
    app.route('/users').get(mycontroller.allusers);
}

