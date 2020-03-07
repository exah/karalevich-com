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
      <SelectWork data={props.data} />
    </Theme>
  )
}

App.getInitialProps = async () => {
  // let projects = await require.context('../public/projects/', true, /\.md$/)
  // let keys = projects.keys()
  
  const slug = 'the-new-normal'
  const content = await import(`../public/projects/${slug}/readme.md`)
  const data = matter(content.default)
  const meta = await import('../components/meta.json')

  return {
    ...data,
    ...meta,
  }
}
