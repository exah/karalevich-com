import { Flex, Link } from './system'
import { Layout } from './Layout'

const Nav = () =>
		<Flex
			gridColumn='1/-1'
			flexes='rbe'
			width='100%'
			pt={1}
			px={2}
			sx={{
				position: 'fixed',
			}}
		>
			<Link variant='x' link='underline'>Maksim</Link>
			<Link variant='x' link='underline'>About</Link>
			<Link variant='x' link='underline'>Entries</Link>
		</Flex>

	export default Nav