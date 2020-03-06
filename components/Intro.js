import { Flex, Text } from './system'
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
			}}
		>
			<Flex
				gridColumn={{min: '1/-2', sm: '1/5'}}
				pt={{min: 4, sm: 5}}
			>
				<Text variant='p'>
					Hey, thanks for visiting. I work at B-Reel (LA, CA) where I help make products & experiences. Before that, I led development of digital products at Strelka Institute (MSK, RU).
				</Text>
				<Text variant='p'>
					I am also working on Four Flowers School and Rill—Common Connections, two platforms on the way to connect people and knowledge.
				</Text>
				<Text variant='p'>
					Browse around and feel free to reach.
				</Text>
			</Flex>
		</Layout>
	)
}