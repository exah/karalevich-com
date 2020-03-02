/* TODO:
- remove '../public/project-name/' from img urls inside projects so images show up in iAWriter
- OR, move .md files inside public and have folder for each project containing imgs + md
- add project cover path by using project url; store image in project folder
- translate sm, md, lg project card sizes into grid values
- add black bg to ::root
- add placeholder for not loaded images using file prefixes
- add lazy load
- add 'playsinline' 'muted' 'loop' options for videos via url prefixes
*/

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
		<Theme theme='dark'>
			<Meta title={meta.title} />
				<Nav />

				<Flex
		 			as='article'
		 			width='100%'
		 			flexes='rss'
					bg='bg'
	 			>
	 			
	 			<Text
	 				width={1/3}
	 				height='52vh'
	 				pl={2}
	 				pt={5}
	 				variant='p'
	 				color='text'
					>
		 				{meta.description}
		 			</Text>
	 			
	 			<Flex
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
		 				{meta.role}
		 			</Text>
		 		</Flex>

	 			<Image width='100%' pb={6} src={meta.cover} />
		 		
					<ReactMarkdown
		 				source={markdown}
		 				renderers={renderers}
		 				escapeHtml={false}
		 			/>
		 		</Flex>
 			
 		</Theme>
	)
}

Project.getInitialProps = async ctx => {
	const { id } = ctx.query
	const content = await import(`../../projects/${id}.md`)
	const data = matter(content.default)
	
	return { ...data }
}