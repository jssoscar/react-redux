
var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

module.exports = {
    entry : [
        'webpack-dev-server/client?http://localhost:80',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output : {
        publicPath : "/prd/",
        filename : "index.js"
    },
    resolve : {
        extensions : ["", ".js", ".jsx"]
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "react-hot!babel"
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin() // 模块热替换
    ],
    cache: false,
    devtool: 'source-map',
    devServer : {
        inline : true,
        hot : true,
        port : 80,
        progress : false
    },
    watch : true,
    watchOptions : {
        poll : true
    },
    stats : {
        assets : false,
        chunks : false,

        chunkModules : false,
        chunkOrigins : false,
        modules : false,
        children : false,
        source : false,

    }
};

WebpackDevServer(webpack({
    entry : [
        'webpack-dev-server/client?http://localhost:80',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output : {
        publicPath : "/prd/",
        filename : "index.js"
    },
    resolve : {
        extensions : ["", ".js", ".jsx"]
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "react-hot!babel"
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin() // 模块热替换
    ],
    cache: false,
    devtool: 'source-map',
    devServer : {
        inline : true,
        hot : true,
        port : 80,
        progress : false
    },
    watch : true,
    watchOptions : {
        poll : true
    },
    stats : {
        assets : false,
        chunks : false,
        chunkModules : false,
        chunkOrigins : false,
        modules : false,
        children : false,
        source : false,
    }
}));
