import { Theme } from '../../components/system/theme'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Meta, Nav } from '../../components/bridge'
import { Layout } from '../../components/Layout'
import { Flex, Text, Link } from '../../components/system'

export default function ProjectTempalte(props) {
	const markdownBody = props.content
	const frontmatter = props.data
	return (
		<Theme>
			<Meta
				title={props.title}
			/>
 			<Nav />
 			<Layout>
 				<Text
 					gridColumn='1/5'
 					variant='p'
				>
 					{frontmatter.description}
 				</Text>
 			</Layout>
 		</Theme>
	)
}

ProjectTempalte.getInitialProps = async function(context) {
	const { slug } = context.query
	const content = await import(`../../projects/${slug}.md`)
	const config = await import(`../../data/config.json`)
	const data = matter(content.default)
	return {
		title: config.title,
		...data,
	}
}