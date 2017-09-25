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
			},{
				test: /\.(woff|svg|ttf|eot)$/i,
				loader:'url-loader',
				options:{
					/*图片名称*/
					name:"fonts/[name].[ext]",
					/*位置*/
				}
			},{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loader:'file-loader',
				options:{
					/*图片名称*/
					name:"images/[name].[ext]",
					/*位置*/
				}
			},{
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
	}
}
