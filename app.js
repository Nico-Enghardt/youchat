var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/benutzer');
var messagesRouter = require('./routes/nachrichten');
var chatRouter = require('./routes/chat')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/benutzer', usersRouter);
app.use('/nachrichten', messagesRouter);
app.use('/chat',chatRouter);


module.exports = app;
