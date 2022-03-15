const webpack = require('webpack');
const fs = require("fs");
const path = require('path');

module.exports = {
    entry: './add.js',
    output: {
        filename: './dist/add.js',
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        // the name exported to window
        library: 'add'
    }
}
