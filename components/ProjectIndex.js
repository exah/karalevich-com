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
					<Layout as='li' gridColumn='1/-1'>
						<Link
							key={project.slug}
							href='/[projectSlug]'
							nextAs={`/${project.slug}`}
							gridRow={data.position}
							gridColumn='1/-1'
						>
							<Row
								title={data.title}
								desc={data.lead}
								tag={data.role}
							/>
						</Link>
					</Layout>
				)
			}
			else return null
		}
		else {
			if (data.archived === undefined) {
				return (
					<Layout as='li' gridColumn='1/-1'>
						<Link
							key={project.slug}
							href='/[projectSlug]'
							nextAs={`/${project.slug}`}
							gridRow={data.position}
							gridColumn='1/-1'
						>
							<Row
								title={data.title}
								desc={data.lead}
								tag={data.role}
							/>
						</Link>
					</Layout>
				)
			}
			else return null
		}

	})
	
	return (
		<>
			<Text
				as='h3'
				pt='56vh'
				variant='x'
				gridColumn='1/-1'
				gridRow='1'
				textAlign='center'
				pb={{min: 4, sm: 6}}
			>
				{props.archived ? 'Archived' : 'Select work'}
			</Text>
		<Layout as='ul' pb={{min: 4, sm: 6}}>
			{List}
		</Layout>
		</>
	)
}