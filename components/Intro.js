import { Flex, Text } from './system'
import { Layout } from './Layout'

const Intro = () =>
	<Layout
		sx={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%,'
			// height: '100%,'
		}}
	>
		<Flex
			gridColumn='1/5'
			pt={5}
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

	export default Intro