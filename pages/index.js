import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Link } from '../components/system'
import { Meta, Nav, Intro, SelectWork } from '../components/bridge'

export default function App(props) {
  return (
    <Theme theme='white'>
      <Meta
        name={props.name}
        title={props.title}
        keywords={props.keywords}
        description={props.description}
        url={props.url}
      />
      <Nav />
      <Intro />
      <SelectWork data={props.projects} />
    </Theme>
  )
}

App.getInitialProps = async function() {
  const meta = await import('../components/meta.json')
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

  return {
    ...meta,
    projects,
  }
}