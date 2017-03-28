
/**
 * Created by wanglei on 2017/1/3.
 */
var path = require('path');

var config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
                exclude: /node_modules/,
                query: {
                    presets:['react','es2015','stage-0'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=image/[hash:8].[name].[ext]'
            }
        ]
    }
};

module.exports=config;
