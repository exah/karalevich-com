import { Flex, Link } from './system'
import { Layout } from './Layout'

export default function() {
	return (
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
				mixBlendMode: 'difference',
			}}
		>
			<Link href='/' variant='x'>Maksim</Link>
			<Link href='/about' variant='x'>About</Link>
			<Link href='/entries' variant='x'>Entries</Link>
		</Flex>
	)
}