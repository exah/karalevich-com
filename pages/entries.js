import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Nav, Intro, SelectWork, Layout, GlobalBg, HelperLayout } from '../components/bridge'

const ListItem = props =>
	<Layout
		as='li' gridColumn='1/-1' py={1}
		sx={{':hover': {opacity: '.64'}}}
	>
		<Text
			as='h2'
			gridColumn={{min: '1/-2', sm: '1/5'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='x'
			color={props.color}
		>
			{props.subject}
		</Text>
		<Text
			as='article'
			gridColumn={{min: '1/-2', sm: '5/10'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='x'
		>
			{props.body}
		</Text>
		<Text
			gridColumn={{min: '1/-2', sm: '10/-1'}}
			pb={{min: 2, md: 0}}
			pl={{min: 1, sm: 2}}
			variant='c'
		>
			{props.tags}
		</Text>
	</Layout>

export default function Entries(props) {
  return (
    <Theme theme='white'>
    	<GlobalBg bg='white' />
      <Nav />
      <HelperLayout />

			<Flex
				as='ul'
				pt='56vh'
				pb={6}
				width='100%'
			>
			
				<Layout gridColumn='1/-1' mb={6}>

					<ListItem
						subject='Title'
						body='Body'
						tags='Tags'
					/>

				</Layout>

				<ListItem
					subject={props.data.title}
					body={props.content}
					tags={props.data.tags}
					color={props.data.color}
				/>

				<ListItem
					subject='Separation of information and its architecture from information visualisation for social platforms on examples of development frameworks and markdown'
					body='In this early period, due to the need to use a foreign language most of the time, the immigrant begins to think in two languages ​​in turn or mixed. If the knowledge of the language is significantly lower than the native, a person during the thought process uses simplified alternatives, which subsequently lead either to a longer logical conclusion, or begin to lead him on a false trail.'
					tags='Note'
					color='blue'
				/>

				
			
			</Flex>
    </Theme>
  )
}

Entries.getInitialProps = async () => {
	const content = await import(`../public/entries/my-note.md`)
	const data = matter(content.default)

	return {
		...data,
	}
}
