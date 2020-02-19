import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import { Project } from './SelectWorkEls'

const SelectWork = () =>
	<Layout
		pt='56vh'
	>
		<Text
			gridColumn='1/-1'
			textAlign='center'
			variant='x'
			pb={6}
		>
			Select work (7)
		</Text>
		<Project />
	</Layout>

	export default SelectWork