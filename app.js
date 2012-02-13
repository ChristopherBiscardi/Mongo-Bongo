
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var Mongolian = require('mongolian');
var server = new Mongolian;
var db = server.db("cms");
var config = db.collection("config");

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes/index')(app,db,config);

app.listen(3000);
console.log("Express CMS server listening on port %d in %s mode", app.address().port, app.settings.env);
