/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* *** D ㆔ K Δ *** */

const choo = require('choo');
const app = choo();

// data

const model = require('./model');

// app data

app.model(model);

// app views

const mainView = require('./views/main');

// app router

app.router([
    ['/', mainView]
]);

// app start

const tree = app.start();
document.body.appendChild(tree);
