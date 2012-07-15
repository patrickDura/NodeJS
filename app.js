
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var databaseUrl = "mydb"; // "username:password@example.com/mydb"
var collections = ["users"]
db = require("mongojs").connect(databaseUrl, collections);

db.users.save({email: "srirangan@gmail.com", password: "iLoveMongo", sex: "female"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved", err);
  else console.log("User saved");
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
