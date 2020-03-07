import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'
import { Project } from './SelectWorkEls'

export default function SelectWork(props) {
	const data = props.data

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
			
			<Project
				slug='the-new-normal'
				data={data}
			/>
		</Flex>
	)
}