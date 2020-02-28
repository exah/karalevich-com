import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { renderers } from '../../components/MarkdownRenderers'

import { Theme } from '../../components/system/theme'
import { Flex, Text, Link, Image } from '../../components/system'
import { Layout } from '../../components/Layout'
import { Meta, Nav } from '../../components/bridge'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data
	return (
		<Theme>
			<Meta title={meta.title} />
			<Nav />
 			
 			<Text
 				width={1/3}
 				height='52vh'
 				pl={2}
 				variant='x'
				>
	 				{meta.description}
	 			</Text>
 			
 			<Flex
 				as='heading'
 				px={2}
 				pb={2}
 				width='100%'
 				flexes='rss'
			>
	 			<Text
	 				width={1/3}
	 				variant='x'
 				>
	 				{meta.title}
	 			</Text>
	 			<Text
	 				width={1/3}
	 				variant='x'
 				>
	 				{meta.lead}
	 			</Text>
	 			<Text
	 				width={1/3}
	 				variant='x'
 				>
	 				{meta.client}
	 			</Text>
	 		</Flex>

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