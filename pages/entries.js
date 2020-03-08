import matter from 'gray-matter'
import { Theme } from '../components/system/theme'
import { Flex, Text, Link } from '../components/system'
import { Meta, Nav, Intro, Layout, GlobalBg } from '../components/bridge'
import { Row } from '../components/ContentViews'

export default function Entries(props) {
  return (
    <Theme theme='white'>
    	<Meta title='Maksim (Entries)' />
    	<GlobalBg bg='white' />
      <Nav />

			<Flex as='ul' pt='56vh' pb={{min: 4, sm: 6}} width='100%'>
			
				<Layout gridColumn='1/-1' mb={6}>
					<Row title='Title' desc='Body' tag='Tags' />
				</Layout>

				<Row
					title={props.data.title}
					desc={props.content}
					tag={props.data.tags}
					color={props.data.color}
				/>

				<Row
					title='Separation of information and its architecture from information visualisation for social platforms on examples of development frameworks and markdown'
					desc='In this early period, due to the need to use a foreign language most of the time, the immigrant begins to think in two languages ​​in turn or mixed. If the knowledge of the language is significantly lower than the native, a person during the thought process uses simplified alternatives, which subsequently lead either to a longer logical conclusion, or begin to lead him on a false trail.'
					tag='Note'
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
