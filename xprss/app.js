const express         = require('express');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const logger          = require('morgan');
const indexRouter     = require('./routes/index');
const errorController = require('./controller/error');

// create a new server
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// we define middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// we define a static path in order to return static files 
// like images, css, js scripts ...
app.use(
  express.static(path.join(__dirname, 'public'))
);

// we add a router
app.use('/', indexRouter);

// error handler
// catch 404 and forward to error handler
app.use(errorController.error404Handler);
app.use(errorController.errorHandler);

// we exports our server
module.exports = app;
