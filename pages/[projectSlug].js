/* TODO:
- add placeholder for not loaded images using file prefixes
- add lazy load
- add 'playsinline' 'muted' 'loop' options for videos via url prefixes
*/

import { useRouter } from 'next/router'
import { getProject, getAllProjects } from '../api/projects'
import { Theme } from '../components/system/theme'
import { Flex, Grid, Text, Image, Video } from '../components/system'
import { Meta, Nav, Layout, GlobalBg, ProjectIndex } from '../components/bridge'
import { ReactMarkdownContainer } from '../components/MarkdownRenderers'

export default function Project(props) {
	const markdown = props.content
	const meta = props.data

	const isImage = meta.thumb.match(/\.jpg|png|gif/i)
	const isVideo = meta.thumb.match(/\.mp4/i)

	const router = useRouter()
  const { projectSlug } = router.query
  
  let path = `/projects/${projectSlug}/`
  let poster = ''
  poster = meta.thumb.replace('mp4', 'jpg')

	return (
		<Theme theme={meta.theme}>
			<GlobalBg bg={meta.theme} />
			<Meta title={`(Maksim) ${meta.title}`} />
				
			<Nav />

			<Layout px={{min: 1, sm: 2}} sx={{ position: 'absolute', top: 0, left: 0 }} >

				<Flex gridColumn={{min: '1/-2', sm: '1/5'}} pt={5}>
					<Text variant='x'>{meta.description}</Text>
				</Flex>
			
			</Layout>

			<Grid as='article' bg='bg' pt={{min: '80vh', sm: '64vh'}} gridTemplateColumns='repeat(12, 1fr)'>
 			
	 			<Flex
	 				gridColumn={{min: '1/-1', sm: '2/-2'}}
	 				flexes={{min: 'css', sm: 'rss'}}
	 				px={{min: 1, sm: 0}}
	 				pb={2}
 				>

		 			<Text width={{min: 1, sm: 1/3}} variant='x'>{meta.title}</Text>
		 			<Text width={{min: 1, sm: 1/3}} variant='x'>{meta.lead}</Text>
		 			<Text width={{min: 1, sm: 1/3}} variant='x'>{meta.role}</Text>
		 		
		 		</Flex>

		 		{isImage
	 				? <Image
	 						width='100%'
	 						gridColumn={{min: '1/-1', sm: '2/-2'}}
	 						pb={{min: 4, sm: 6}}
	 						px={{min: 1, sm: 0}}
	 						src={`${path}${meta.thumb}`}
 						/>
		 			: <Video
		 					width='100%'
		 					gridColumn={{min: '1/-1', sm: '2/-2'}}
		 					pb={{min: 4, sm: 6}}
		 					px={{min: 1, sm: 0}}
		 					poster={`${path}${poster}`}
		 					src={`${path}${meta.thumb}`}
		 					loop playsinline muted
	 					/>
	 			}
 			
 			</Grid>
		 		
 			<Layout as='article'>
		 		<Flex gridColumn='1/-1' flexes='rss' bg='bg'>
		 			
		 			<ReactMarkdownContainer
		 				source={markdown}
		 				slug={projectSlug}
		 			/>
		 		
		 		</Flex>
	 		</Layout>

	 		<Layout py={{min: 4, sm: 6}}>
	 		
	 			<Text variant='x' gridColumn={{min: '1/-2', sm: '5/9' }} pl={{min: 1, sm: 2}}>
	 				<Text as='span' color='tinted' pr={{min: 1, sm: 2}}>(Info)</Text>
 					{meta.info}
 				</Text>

 				<Text variant='x' gridColumn={{min: '1/-2', sm: '5/9' }} pl={{min: 1, sm: 2}}>
	 				<Text as='span' color='tinted' pr={{min: 1, sm: 2}}>(Service)</Text>
 					{meta.service}
 				</Text>
	 		
	 		</Layout>

	 		<ProjectIndex data={props.projects} />
 			
 		</Theme>
	)
}

Project.getInitialProps = async ctx => {
    const projects = await getAllProjects()
    const { content, data } = await getProject(ctx.query.projectSlug)

	return {
        data,
        content,
        projects,
	}
}
