import { Flex, Link } from './system'
import { Layout } from './Layout'

const Nav = () =>
		<Flex
			as='nav'
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
			<Link href='/' variant='x' link='line'>Maksim</Link>
			<Link href='/about' variant='x' link='line'>About</Link>
			<Link href='/enties' variant='x' link='line'>Entries</Link>
		</Flex>

	export default Nav