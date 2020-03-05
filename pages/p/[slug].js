/* TODO:
- add project cover path by using project url; store image in project folder
- translate sm, md, lg project card sizes into grid values
- add placeholder for not loaded images using file prefixes
- add lazy load
- add 'playsinline' 'muted' 'loop' options for videos via url prefixes
*/

import matter from 'gray-matter'
import { useRouter } from 'next/router'

import { Theme } from '../../components/system/theme'
import { Flex, Grid, Text, Image, Video } from '../../components/system'
import { Meta, Nav, Layout, GlobalBg, HelperLayout } from '../../components/bridge'
import { ReactMarkdownContainer } from '../../components/MarkdownRenderers'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data

	const isImage = meta.thumb.match(/\.jpg|png|gif/i)
	const isVideo = meta.thumb.match(/\.mp4/i)

	const router = useRouter()
  const { slug } = router.query
  
  let path = `/projects/${slug}/`
  let poster = ''
  if (isVideo) poster = meta.thumb.replace(/\.mp4/i, '.jpg')

	return (
		<Theme theme={meta.theme}>
			{/* <HelperLayout /> */}
			<GlobalBg bg={meta.theme} />
			<Meta title={meta.title} />
				
			<Nav />

			<Layout px={2} sx={{ position: 'absolute', top: 0, left: 0 }} >

				<Flex gridColumn='1/5' pt={5}>
					<Text variant='p'>{meta.description}</Text>
				</Flex>
			
			</Layout>

			<Grid as='article' bg='bg' pt='56vh' gridTemplateColumns='repeat(12, 1fr)'>
 			
	 			<Flex pb={2} width='100%' flexes='rss' gridColumn='2/-2'>

		 			<Text width={1/3} variant='x'>{meta.title}</Text>
		 			<Text width={1/3} variant='x'>{meta.lead}</Text>
		 			<Text width={1/3} variant='x'>{meta.role}</Text>
		 		
		 		</Flex>

		 		{isImage
	 				? <Image width='100%' gridColumn='2/-2' pb={6} src={`${path}${meta.thumb}`} />
		 			: <Video width='100%' gridColumn='2/-2' pb={6} poster={`${path}${poster}`} src={`${path}${meta.thumb}`} loop playsinline muted />
	 			}
 			
 			</Grid>
		 		
 			<Layout as='article'>
		 		<Flex gridColumn='1/-1' flexes='rss' bg='bg'>
		 			
		 			<ReactMarkdownContainer
		 				source={markdown}
		 				slug={slug}
		 			/>
		 		
		 		</Flex>
	 		</Layout>

	 		<Layout py={6}>
	 		
	 			<Text variant='x' gridColumn='5/9'>
	 				<Text as='span' color='tinted' pr={2}>(Info)</Text>
 					{meta.info}
 				</Text>

 				<Text variant='x' gridColumn='5/9'>
	 				<Text as='span' color='tinted' pr={2}>(Service)</Text>
 					{meta.service}
 				</Text>
	 		
	 		</Layout>
 			
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
