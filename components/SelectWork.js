import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'
import { Card } from './ContentViews'

export default function SelectWork(props) {

	const List = props.data.map(project => {
		const data = project.document.data

		if (data.archived === undefined) {
			return (
				<Card
					key={project.slug}
					slug={project.slug}
					data={project.document.data}
				/>
			)
		}
		else return null
	})

	return (
		<Flex width='100%' flexes='ccc'>
			<Layout pt='56vh' px={2}>
				
				<Text
					variant='x'
					pb={{min: 4, sm: 6}}
					sx={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						mx: 'auto',
						textAlign: 'center',
					}}
				>
					Select work (7)
				</Text>
				
			</Layout>
			<Layout>{List}</Layout>

		</Flex>
	)
}