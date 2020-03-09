import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'
import { Project } from './SelectWorkEls'
import { Row } from './ContentViews'

export default function ProjectIndex(props) {

	const List = props.data.map(project => {
		const data = project.document.data

		if (props.archived === 'yes') {
			if (data.archived === 'yes') {
				return (
					<Link
						key={project.slug}
						href={`/${project.slug}`}
						gridRow={data.position}
						gridColumn='1/-1'
					>
						<Row
							title={data.title}
							desc={data.lead}
							tag={data.role}
						/>
					</Link>
				)
			}
			else return null
		}
		else {
			if (data.archived === undefined) {
				return (
					<Link
						key={project.slug}
						href={`/${project.slug}`}
						gridRow={data.position + 1}
						gridColumn='1/-1'
					>
						<Row
							title={data.title}
							desc={data.lead}
							tag={data.role}
						/>
					</Link>
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
				gridRow='1'
				textAlign='center'
				pb={{min: 4, sm: 6}}
			>
				{props.archived ? 'Archived' : 'Select work'}
			</Text>
			{List}
		</Layout>
	)
}