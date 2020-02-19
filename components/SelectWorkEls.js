import { Flex, Grid, Text, Link, Image } from './system'
import { Layout } from './Layout'

export const Project = () =>
	<Layout
			gridColumn='1/-1'
			px={0}
			pb={6}
		>
			<Link
				gridColumn='1/5'
				variant='x'
			>
				Title
			</Link>
			<Link
				gridColumn='5/9'
				variant='x'
			>
				Description
			</Link>
			<Link
				gridColumn='9/-1'
				variant='x'
			>
				Role
			</Link>
			<Flex
				gridColumn='1/-1'
				height='800px'
				mt={1}
				flexes='ccc'
				bg='grey'
			>
				img
			</Flex>
		</Layout>

	export default Project