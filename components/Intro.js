import { Flex, Text } from './system'
import { Layout } from './Layout'

const Intro = () =>
	<Layout>
		<Flex
			gridColumn='1/5'
		>
			<Text variant='x' pb={1} sx={{textIndent: '1rem'}}>
				Hey, thanks for visiting. I work at B-Reel (LA, CA) where I help make products & experiences. Before that, I led development of digital products at Strelka Institute (MSK, RU).
			</Text>
			<Text variant='x' pb={1} sx={{textIndent: '1rem'}}>
				I am also working on Four Flowers School and Rill—Common Connections, two platforms on the way to connect people and knowledge.
			</Text>
			<Text variant='x'>
				Browse around and feel free to reach.
			</Text>
		</Flex>
	</Layout>

	export default Intro