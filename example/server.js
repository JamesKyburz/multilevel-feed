var level = require('level');
var db = level('test.db');
var feed = require('multilevel-feed');

var http = require('http');
var server = http.createServer(function (req, res) { res.end('beep\n') });
server.listen(5000);

var shoe = require('shoe');
var sock = shoe(function (stream) { stream.pipe(feed(db)).pipe(stream) });
sock.install(server, '/sock');
