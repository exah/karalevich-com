import { Theme } from '../components/system/theme'
import { Link } from '../components/system'

const Project = props =>
  <Link
     variant='x' link='underline'
     href='/p/[id]' nextAs={`/p/${props.id}`}
  >
    Title: {props.id}
  </Link>

export default function App() {
  return (
    <Theme>
       <Project id='the-new-normal' />
    </Theme>
  )
}