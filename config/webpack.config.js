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
    module: {
        strictExportPresence: true,  // 将缺失的导出提示成错误而不是警告
        rules: [
            {
                test: /\.(tsx?|jsx|js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true }, // cacheDirectory：babel-loader 在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率，所以开启该配置将这些公共文件缓存起来，下次编译就会加快很多
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
}
