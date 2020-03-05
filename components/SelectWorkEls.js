import { Flex, Grid, Text, Link, Image, Video } from './system'
import { Layout } from './Layout'

export const Project = (props) => {
	const isImage = props.data.thumb.match(/\.jpg|png/i)
	const isVideo = props.data.thumb.match(/\.mp4/i)
	
	let poster = ''
  if (isVideo) poster = props.data.thumb.replace(/\.mp4/i, '.jpg')

	return (
		<Link href={`/p/${props.slug}`} width='100%'
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
			}}>

			<Flex as='article' gridColumn='2/-2' flexes='rss'>
			
				<Flex pb={2} width='100%' flexes='rss'>
					<Text width={1/3} variant='x'>{props.data.title}</Text>
					<Text width={1/3} variant='x'>{props.data.lead}</Text>
					<Text width={1/3} variant='x'>{props.data.role}</Text>
				</Flex>

				{isImage
					? <Image
							src={`/projects/${props.slug}/${props.data.thumb}`}
							gridColumn={props.data.size}
							width='100%'
							height='auto'
							pb={6}
							flexes='ccc'
						/>
					: <Video
							src={`/projects/${props.slug}/${props.data.thumb}`}
							poster={`/projects/${props.slug}/${poster}`}
							gridColumn={props.data.size}
							width='100%'
							height='auto'
							pb={6}
							flexes='ccc'
						/>
				}
				
			</Flex>

		</Link>
	)
}