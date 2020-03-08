// TODO
export default function GetProjects(props) {
  const projects = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    
    const data = keys.map((key, index) => {
      const slug = key.split('/')[1]
      const value = values[index]
      const document = matter(value.default)
      return {
        document,
        slug,
      }
    })
    return data
  })(require.context('../public/projects', true, /\.md$/))
}