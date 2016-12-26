define(function(require, exports, module) {
    var csv = require('../csv.js');

    var json = csv('id,name,age\n1,Tom,25');

    document.write(JSON.stringify(json,null, ' '))
});
