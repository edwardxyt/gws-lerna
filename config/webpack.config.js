const webpack = require('webpack');
const fs = require("fs");
const path = require('path');

module.exports = {
    entry: './packages/moduleA/index.js',
    output: {
        filename: 'moduleA.js',
        path: `/Users/xiayuting/workBase/gws-lerna/packages/moduleA/lib`,
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        library: 'moduleA'
    },
    mode: 'production',
}
