import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'
import { Project } from './SelectWorkEls'
import { Row } from './ContentViews'

export default function ProjectIndex(props) {

	const List = props.data.map(project => {
		const data = project.document.data
		console.log(data.archived)

		if (props.archived === 'yes') {
			if (data.archived === 'yes') {
				return (
					<Row
						key={project.slug}
						slug={project.slug}
						title={data.title}
						desc={data.lead}
						tag={data.role}
					/>
				)
			}
			else return null
		}
		else {
			if (data.archived === undefined) {
				return (
					<Row
						key={project.slug}
						slug={project.slug}
						title={data.title}
						desc={data.lead}
						tag={data.role}
					/>
				)
			}
			else return null
		}

	})
	
	return (
		<Layout pt='56vh' pb={{min: 4, sm: 6}}>
			<Text
				variant='x'
				gridColumn='1/-1'
				textAlign='center'
				pb={{min: 4, sm: 6}}
			>
				{props.archived ? 'Archived' : 'Select work'}
			</Text>
			{List}
		</Layout>
	)
}