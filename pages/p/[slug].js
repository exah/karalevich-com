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
				title={frontmatter.title}
			/>
 			<Nav />
 			<Layout
 				px={2}
				width='100%'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>
 				<Text
 					gridColumn='1/5'
 					pt={5}
 					variant='p'
				>
 					{frontmatter.description}
 				</Text>
 			</Layout>
 		</Theme>
	)
}

ProjectTempalte.getInitialProps = async ctx => {
	const { slug } = ctx.query
	const content = await import(`../../projects/${slug}.md`)
	const config = await import(`../../data/config.json`)
	const data = matter(content.default)
	return {
		title: config.title,
		...data,
	}
}