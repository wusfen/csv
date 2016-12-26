;
(function(global) {

    function csv2json(data, keys) {
        keys = keys || '';
        if (keys && keys.split) keys = keys.split(',');

        // ,"xxxxx",
        data = data.replace(/(^|\n|,)"((""|[^"])*?)"(?=,|\n|$)/g, function($, $1, $2, $3) {
            return $1 + $2
                // "xx,xx"
                .replace(/,/g, ',\r\r\r')
                // "xx\nxx"
                .replace(/\n/g, '\n\r\r\r')
                // "xx""string""xx"
                .replace(/""/g, '"')
        });

        // split row
        var arr = data.split(/\n(?!\r\r\r)/);
        var json = [];
        for (var i = 0; i < arr.length; i++) {
            // split col
            var row = arr[i].split(/,(?!\r\r\r)/);
            var obj = {};
            for (var ci = 0; ci < row.length; ci++) {
                // --\r\r\r
                row[ci] = row[ci].replace(/\r\r\r/g, '');
                // {}
                var key = keys ? keys[ci] : arr[0][ci];
                obj[key] = row[ci];
            }
            arr[i] = row;
            json[i] = obj;
        }

        keys || json.shift();
        // return arr;
        return json;
    }

    function json2csv(data) {
        var csv = '';
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            for (var ci in row) {
                var col = String(row[ci]);
                if (col.match(/(,|\n|")/)) {
                    col = '"' + col.replace(/"/g, '""') + '"';
                }
                csv += col + ',';
            }
            csv = csv.replace(/,$/, '\n');
        }
        return csv.replace(/\n$/, '');
    }

    function csv(data, keys) {
        return typeof data == 'string' ? csv2json(data, keys) : json2csv(data);
    }

    // require.js || sea.js
    if (typeof define == 'function') {
        define(function(require, exports, module) {
            return module.exports = csv
        });
    }
    // node.js
    if (typeof module != 'undefined') {
        module.exports = csv;
    }
}(this));
