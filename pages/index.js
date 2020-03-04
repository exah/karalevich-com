import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Link } from '../components/system'

import { Intro, SelectWork } from '../components/bridge'

export default function App(props) {
  // console.log(props.data)

  return (
    <Theme>
      <Intro />
      <SelectWork
        data={props.data}
      />
    </Theme>
  )
}

App.getInitialProps = async () => {
  const slug = 'the-new-normal'
  const content = await import(`../public/projects/${slug}/readme.md`)
  const data = matter(content.default)

  return {
    ...data,
  }
}
