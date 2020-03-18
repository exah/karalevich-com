import { Flex, Text, Link } from './system'
import { Layout } from './Layout'

export default function() {
	return (
		<Layout
			px={{min: 1, sm: 2}}
			width='100%'
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 2,
			}}
		>
			<Flex
				gridColumn={{min: '1/-2', sm: '1/5'}}
				pt={5}
			>
				<Text variant='x' pb={1}>
					Hey, thanks for visiting. I currently work at B-Reel (LA, CA) where I help make products & experiences. Before that, I led development of digital products at Strelka Institute (MSK, RU).
				</Text>
				<Text variant='x' pb={1}>
					I am also working on <Link link='line' href='https://fourflowers.school'>Four Flowers School</Link> and <Link link='line' href='https://rill.cc'>Rill—Common Connections</Link>, two platforms on the way to connect people and knowledge.
				</Text>
				<Text variant='x'>
					Browse around and feel free to <Link link='line' href='mailto:maksim@karalevich.com'>reach</Link>.
				</Text>
			</Flex>
		</Layout>
	)
}