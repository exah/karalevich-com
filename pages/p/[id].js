import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { renderers } from '../../components/MarkdownRenderers'

import { Theme } from '../../components/system/theme'
import { Layout } from '../../components/Layout'
import { Flex, Text, Link, Image } from '../../components/system'
import { Meta, Nav } from '../../components/bridge'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data
	return (
		<Theme>
			<Meta
				title={meta.title}
			/>
			<Nav />
 			<Layout
 				px={2}
 				pt={4}
 				pb={2}
 				width='100%'
			>
	 			<Text gridColumn='1/5' gridRow='1' height='52vh'>{meta.description}</Text>
	 			<Text gridColumn='1/5' gridRow='2'>{meta.title}</Text>
	 			<Text gridColumn='5/9' gridRow='2'>{meta.lead}</Text>
	 			<Text gridColumn='9/-1' gridRow='2'>{meta.client}</Text>
	 		</Layout>

 			<Image width='100%' pb={6} src={meta.cover} />
	 		
	 		
	 			<ReactMarkdown
	 				source={markdown}
	 				renderers={renderers}
	 				escapeHtml={false}
	 			/>
 			
 			
 		</Theme>
	)
}

Project.getInitialProps = async ctx => {
	const { id } = ctx.query
	const content = await import(`../../projects/${id}.md`)
	const data = matter(content.default)
	
	return { ...data }
}