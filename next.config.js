const glob = require('glob')

module.exports = ({
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
    }
    // add /p/*.md
    const projects = glob.sync('src/projects/**/*.md')
    const projects = projects.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())

    projects.forEach(project => {
      paths[`/p/${project}`] = { page: '/p/[id]', query: { id: project } }
    })
  
    return paths
  }
})