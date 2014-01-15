var multilevel = require('multilevel');
var manifest = require('./manifest.json');

module.exports = function (mfst) {
    return multilevel.client(mfst || manifest);
};
