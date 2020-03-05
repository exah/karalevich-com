/* TODO:
- add project cover path by using project url; store image in project folder
- translate sm, md, lg project card sizes into grid values
- add black bg to ::root
- add placeholder for not loaded images using file prefixes
- add lazy load
- add 'playsinline' 'muted' 'loop' options for videos via url prefixes
*/

import matter from 'gray-matter'
import { useRouter } from 'next/router'
import { Global, css } from '@emotion/core'

import { Theme } from '../../components/system/theme'
import { Flex, Text, Image, Video } from '../../components/system'
import { Meta, Nav } from '../../components/bridge'
import { ReactMarkdownContainer } from '../../components/MarkdownRenderers'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data

	const isImage = meta.thumb.match(/\.jpg|png/i)
	const isVideo = meta.thumb.match(/\.mp4/i)

	const router = useRouter()
  const { slug } = router.query
  
  let path = `/projects/${slug}/`
  let poster = ''
  if (isVideo) poster = meta.thumb.replace(/\.mp4/i, '.jpg')

	return (
		<Theme theme={meta.theme}>

			<Global
	      styles={css`
	        :root { background-color: ${meta.theme} }
	      `}
	    />

			<Meta title={meta.title} />
				<Nav />
	 			<Text
	 				width={1/3}
	 				height='56vh'
	 				pl={2}
	 				pt={5}
	 				variant='p'
	 				color='text'
					>
		 				{meta.description}
		 			</Text>

				<Flex as='article' px='10%' flexes='rss' bg='bg'>
	 			
		 			<Flex pb={2} width='100%' flexes='rss'>

			 			<Text width={1/3} variant='x'>{meta.title}</Text>
			 			<Text width={1/3} variant='x'>{meta.lead}</Text>
			 			<Text width={1/3} variant='x'>{meta.role}</Text>
			 		
			 		</Flex>

			 		{isImage
		 				? <Image width='100%' pb={6} src={`${path}${meta.thumb}`} />
			 			: <Video width='100%' pb={6} poster={`${path}${poster}`} src={`${path}${meta.thumb}`} loop playsinline muted />
		 			}
	 			
	 			</Flex>
		 		
		 		<Flex as='article' width='80%' flexes='rss' bg='bg'>
		 			
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
