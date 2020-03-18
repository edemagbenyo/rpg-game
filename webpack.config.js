const path = require('path')
module.exports={
  entry:{
    app:'./src/index.js'
  },
  output:{
    filename:'main.js',
    path: path.resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}