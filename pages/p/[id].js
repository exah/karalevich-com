import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { Theme } from '../../components/system/theme'
import { Layout } from '../../components/Layout'
import { Flex, Text, Link, Image } from '../../components/system'
import { Meta, Nav } from '../../components/bridge'

const renderers = {
	paragraph: Text,
	image: ({src, alt}) => {
		let output
		if (src.match(/\.png/i)) {
			return <Image src={src} width='40px' />
		}
		else if(src.match(/\.vimeo/)) {
			return <Link href={src}>{alt}</Link>
		}
	}
}

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
 				width='100%'
			>
	 			<Text gridColumn='1/5' gridRow='1' height='52vh'>{meta.lead}</Text>
	 			<Text gridColumn='5/9' gridRow='2'>{meta.title}</Text>

	 			<ReactMarkdown
	 				source={markdown}
	 				renderers={renderers}
	 			/>
 			
 			</Layout>
 		</Theme>
	)
}

Project.getInitialProps = async ctx => {
	const { id } = ctx.query
	const content = await import(`../../projects/${id}.md`)
	const data = matter(content.default)
	
	return { ...data }
}