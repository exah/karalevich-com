import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Link } from '../components/system'
import { Meta, Nav, Intro, SelectWork, ProjectIndex } from '../components/bridge'
import GetProjects from '../components/GetProjects'
import NextLink from 'next/link'

export default function App(props) {
  return (
    <Theme theme='white'>
      <Meta title='Maksim (Work)'/>
      <Nav />
      <Intro />
      <SelectWork data={props.projects} />
      <ProjectIndex data={props.projects} archived='yes' />
    </Theme>
  )
}

App.getInitialProps = async () => {
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

  return { projects }
}