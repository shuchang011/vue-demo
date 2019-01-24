const htmlPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,  //打包 .css文件
                loader:'style-loader!css-loader'
            },
            {
                test: /\.scss$/,  //打包 .scss文件
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less/,  //打包 .less文件
                loader:'style-loader!css-loader!less-loader'
            }
            ,
            {
                test: /\.(png|jpg|gif|ttf)$/,  //打包 url请求的资源文件
                loader:'url-loader?limit=40000' //limit表示图片的大小为20K是临界值，小于20K的图片均被打包到build.js中去，请求图片就会很快
            },
            {
                test: /\.js$/,  // 将.js文件中的es6语法转成es5语法
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.vue$/,  // 解析 .vue 组件页面文件
                loader:'vue-loader' //
            }
        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    },
    plugins:[
        new htmlPlugin({
            title:'home',
            filename:'index.html',
            template:'index1.html'
        })
    ]
}