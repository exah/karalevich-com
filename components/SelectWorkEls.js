import { Flex, Grid, Text, Link, Image } from './system'
import { Layout } from './Layout'

export const Project = (props) =>
	<Link
		href={props.href}
	>
		<Layout
			gridColumn='1/-1'
		>
			<Text
				px={2}
				gridColumn='1/5'
				variant='x'
			>
				{props.title}
			</Text>
			<Text
				px={2}
				gridColumn='5/9'
				variant='x'
			>
				{props.lead}
			</Text>
			<Text
				px={2}
				gridColumn='9/-1'
				variant='x'
			>
				{props.role}
			</Text>
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
</Link>

	export default Project