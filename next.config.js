const glob = require('glob')

module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
      use: 'raw-loader',
		})
		return config
	},
  exportPathMap: async function() {
    const routes = {
      '/': { page : '/'}
    }
    //get all .md files in the posts dir
    const projects = glob.sync('src/projects/**/*.md')

    //remove path and extension to leave filename only
    const prjSlugs = projects.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())
    
    //add each blog to the routes obj
    prjSlugs.forEach(prj => {
      routes[`/p/${prj}`] = { page: '/p/[slug]', query: { slug: prj } };
    });
  
    return routes
  },
  exportTrailingSlash: true,
};