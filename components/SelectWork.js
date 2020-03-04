import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import { Project } from './SelectWorkEls'

const SelectWork = (props) => {
const data = props.data
console.log(props)

return (
	<>
		<Layout
			pt='56vh'
			px={2}
		>
			<Text
				gridColumn='1/-1'
				textAlign='center'
				variant='x'
				pb={6}
			>
				Select work (7)
			</Text>
		</Layout>
		
		<Project
			href={`/p/${props.slug}`}
			title={data.title}
			lead={data.lead}
			role={data.role}
			cover={data.thumb}
			column='1/-1'
		/>
	</>
	)
	}

	export default SelectWork