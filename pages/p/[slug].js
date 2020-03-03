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
import { ReactMarkdownContainer } from '../../components/MarkdownRenderers'
import { useRouter } from 'next/router'

import { Theme } from '../../components/system/theme'
import { Flex, Text, Link, Image, Video } from '../../components/system'
import { Layout } from '../../components/Layout'
import { Meta, Nav } from '../../components/bridge'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data

	const isImage = meta.img.match(/\.jpg/i)
	const isVideo = meta.img.match(/\.mp4/i)

	const router = useRouter()
  const { slug } = router.query

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

		 		{isImage
	 				? <Image width='100%' pb={6} src={meta.img} />
		 			: <Video width='100%' pb={6} src={meta.img} loop playsinline muted />
	 			}
		 		
		 			<ReactMarkdownContainer
		 				source={markdown}
		 				slug={slug}

		 			/>
		 		</Flex>
 			
 		</Theme>
	)
}

Project.getInitialProps = async ctx => {
	const { slug } = ctx.query
	const content = await import(`../../public/projects/${slug}/readme.md`)
	const data = matter(content.default)

	return {
		...data,
	}
}
