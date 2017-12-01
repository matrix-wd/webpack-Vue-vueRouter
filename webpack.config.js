var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
    devtool: "#cheap-module-eval-source-map",
	output: {
		path: path.join(__dirname, "./dist"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test:/\.vue$/, loader: 'vue-loader'},
			{test:/\.css$/, loader: 'style-loader!css-loader'},
			{	
				test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=1024',
            },
            {
            	test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            	loader: "file-loader"
            },
            {
            	test: /\.js/, 
            	loader: "babel-loader",
            	exclude: "/node_modules/"
        	},
        	{
        		test: /\.less/,
        		loader: "style-loader!css-loader!less-loader!"
        	}
		]
	},
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}

if(process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#cheap-module-source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}