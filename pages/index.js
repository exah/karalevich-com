import { getAllProjects } from '../api/projects'
import { Theme } from '../components/system/theme'
import {
    GlobalBg,
    Meta,
    Nav,
    Intro,
    SelectWork,
    ProjectIndex,
} from '../components/bridge'

export default function App(props) {
  return (
    <Theme theme='white'>
      <Meta title='Maksim (Work)'/>
      <GlobalBg bg='white' />
      <Nav />
      <Intro />
      <SelectWork data={props.projects} />
      <ProjectIndex data={props.projects} archived='yes' />
    </Theme>
  )
}

App.getInitialProps = async () => {
    const projects = await getAllProjects()

  return { projects }
}