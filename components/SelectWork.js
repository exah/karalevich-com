import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import { Project } from './SelectWorkEls'

const SelectWork = () =>
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
			column='1/-1'
			title='Four Flowers School · Family Education'
			lead='Platform for self-directed education'
			role='(Co-Founder)'
			cover='/covers/c-four-flowers.png'
		/>
	</>

	export default SelectWork