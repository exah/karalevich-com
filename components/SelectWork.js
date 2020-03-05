import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import { Project } from './SelectWorkEls'

const SelectWork = (props) => {
const data = props.data
console.log(props)

return (
	<Flex
		width='100%'
		flexes='ccc'
	>
		<Layout
			pt='56vh'
			px={2}
		>
			<Text
				variant='x'
				pb={6}
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

	export default SelectWork