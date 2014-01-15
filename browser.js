var multilevel = require('multilevel');
var manifest = require('./manifest.json');

module.exports = function (mfst) {
    var db = multilevel.client(mfst || manifest);
    return db.createRpcStream();
};
