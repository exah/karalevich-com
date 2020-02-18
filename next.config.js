module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/mission': { page: '/mission' }
    }

    return paths;
  }
};