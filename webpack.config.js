const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: "[name].js"
  },
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		filename : "./index.html",
	// 		template: "./index.html",
	// 		inject : "body"
	// 	})
	// ],
	devServer:{
    contentBase: path.join(__dirname,'./dist')
	},
	devtool: 'source-map',
	module : {
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader",
				options : {
					presets:["latest","react"]
				},
				include:[
					path.resolve(__dirname,"./src")
				]
			},{
				test:/\.css$/,
				loader :"style-loader!css-loader"
			},{
				test:/\.css$/,
				loader :"postcss-loader",
				options: {
					plugins:function(loader){
						return [require('autoprefixer')({
							browsers: ['last 5  versions']
						})]
					}
				}
			},
			{
				test: /\.(woff|svg|ttf|eot)$/i,
				loader:'url-loader',
				options:{
					/*图片名称*/
					name:"fonts/[name].[ext]",
					/*位置*/
				}
			},
			//引入 imgs 下的图片
			{
					test: /\.(png|jpg|gif)$/,
					use: [{
							loader: 'file-loader',
							options:{
								name: "[path][name].[ext]"
							}
					}]
			},
			// {
			// 	test: /\.(gif|png|jpe?g|svg)$/i,
			// 	loader:'file-loader',
			// 	options:{
			// 		/*图片名称*/
			// 		name:"imgs/[name].[ext]",
			// 		/*位置*/
			// 	}
			// },
			{
				test:/\.json$/,
				loader:"json-loader"
			},{
				test:/\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings 
				}, {
					loader: "css-loader" // translates CSS into CommonJS 
				}, {
					loader: "less-loader" // compiles Less to CSS 
				}]
			}
		]
	},
	resolve: {
    alias: {
      src: path.resolve(__dirname,'./src')
    }
  }
}
