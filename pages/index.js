import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Link } from '../components/system'
import { Meta, Nav, Intro, SelectWork } from '../components/bridge'

export default function App(props) {
  return (
    <Theme theme='white'>
      <Meta title={props.meta.title} />
      <Nav />
      <Intro />
      <SelectWork data={props.data} />
    </Theme>
  )
}

App.getInitialProps = async () => {
  const slug = 'the-new-normal'
  const content = await import(`../public/projects/${slug}/readme.md`)
  const data = matter(content.default)
  const meta = await import('../components/meta.json')

  return {
    ...data,
    meta,
  }
}
