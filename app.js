const fs = require('fs');
const https = require('https');
const http = require('http');
var express = require('express');
var multer  = require('multer');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');

var vhost = require('vhost');

var main = express();

const hostname = 'sigmanu.mit.edu';
const httpsPort = 443;
const httpPort = 80;

//var routes = require('./routes/index');

//Log all uncaught exceptions so we know what's going on if the mainlication crashes
process.on('uncaughtException', function (err) {
    console.log(err);
}); 

//main.use(express.static(path.join(__dirname, '/public')))

// view engine setup
//main.set('views', path.join(__dirname, 'views'));
//main.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//main.use(favicon(__dirname + '/public/favicon.ico'));
main.use(logger('dev'));
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use(express.static(path.join(__dirname, 'public')));

//main.use('/', routes);

var redirect = express();

redirect.use(function(req, res){
    if (!module.parent) console.log(req.vhost);
    console.log(req._parsedUrl.path)
  res.redirect('http://sigmanu.mit.edu' + req._parsedUrl.path);
});

// catch 404 and forward to error handler
main.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (main.get('env') === 'development') {
    main.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
main.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/*
 If in development, expose the application directly
 Else use redirect
*/
if (main.get('env') === 'development') {
    // main.listen('8080', 'localhost'); 
    console.log("Sigma Nu website running on port 8080. [Development mode]");
    console.log("Running on localhost")
    
    const httpsOptions = {
        cert: fs.readFileSync('./localhost.pem'),
	    key: fs.readFileSync('./localhost-key.pem')
    };

    const httpsServer = https.createServer(httpsOptions,main);
    httpsServer.listen(8080,'localhost')
    module.exports = main;

} else {
  var app = express();
  console.log("here");

  app.use(vhost('*.sigmanu.mit.edu', redirect)); // Serves all subdomains via Redirect app
  app.use(vhost('sigmanu.mit.edu', main)); // Serves top level domain via Main server app
  
  app.listen('8080', function(req, res, err) {
    console.log("Sigma Nu website running on port 8080.");
  });

    const httpsOptions = {
        cert: fs.readFileSync('/etc/httpd/conf/ssl.crt/sigmanu.mit.edu.cer'),
	    ca: fs.readFileSync('/etc/httpd/conf/ssl.ca/InCommon-chain.crt'),
	    key: fs.readFileSync('/etc/httpd/conf/ssl.key/sigmanu.mit.edu.key')
    };

    const httpsServer = https.createServer(httpsOptions,app);

    //redirecting from http server to https
    main.use((req,res,next) => {
        if (req.protocol == 'http') {
            res.redirect(301, `https://${req.headers.host}${req.url}`);
        }
        next();
    });

    httpsServer.listen(httpsPort,hostname);
    

  module.exports = app;
}
