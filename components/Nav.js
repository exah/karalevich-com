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
				zIndex: 2,
			}}
		>
			<Link href='/' variant='x' link='underline'>Maksim</Link>
			<Link href='/about' variant='x' link='underline'>About</Link>
			<Link href='/enties' variant='x' link='underline'>Entries</Link>
		</Flex>

	export default Nav