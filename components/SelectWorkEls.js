import { Flex, Grid, Text, Link, Image } from './system'
import { Layout } from './Layout'

export const Project = (props) =>
	<Layout
		gridColumn='1/-1'
	>
		<Link
			px={2}
			gridColumn='1/5'
			variant='x'
		>
			{props.title}
		</Link>
		<Link
			px={2}
			gridColumn='5/9'
			variant='x'
		>
			{props.lead}
		</Link>
		<Link
			px={2}
			gridColumn='9/-1'
			variant='x'
		>
			{props.role}
		</Link>
		<Image
			src={props.cover}
			gridColumn={props.column}
			width='100%'
			height='auto'
			mt={1}
			pb={6}
			flexes='ccc'
		/>
</Layout>

	export default Project