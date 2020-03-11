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
    const projects = glob.sync('src/public/projects/**/*.md')
    const projectSlugs = projects.map(file => file.split('/')[1])
    projectSlugs.forEach(project => {
      routes[`/${project}`] = {page: '/[projectSlug]', query: { projectSlug: project }}
    })
    return routes
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