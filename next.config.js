const glob = require('glob')
const path = require('path')

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async () => {
    const routes = {
      '/': { page : '/'},
      '/about': { page : '/about'},
      '/entries': { page : '/entries'},
    }
  },
  
  entry: path.resolve(__dirname, 'index.js'),
  
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  node: {
    __dirname: false
  }
}