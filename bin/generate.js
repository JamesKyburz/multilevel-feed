var multilevel = require('multilevel');
var liveFeed = require('level-livefeed');

var db = require('level-mem');
db.methods = db.methods || {};

db.methods.livefeed = { type: 'readable' };
db.livefeed = function (opts) {
    return liveFeed(db, opts);
};
multilevel.writeManifest(db, __dirname + '/../manifest.json');
