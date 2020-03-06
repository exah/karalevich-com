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

			<Flex
	 				gridColumn={{min: '1/-1', sm: '2/-2'}}
	 				flexes='rss'
	 				px={{min: 1, sm: 0}}
 				>
 					<Flex
 						width='100%'
		 				pb={2}
		 				flexes={{min: 'css', sm: 'rss'}}
					>
			 			<Text width={{min: 1, sm: 1/3}} variant='x'>{props.data.title}</Text>
			 			<Text width={{min: 1, sm: 1/3}} variant='x'>{props.data.lead}</Text>
			 			<Text width={{min: 1, sm: 1/3}} variant='x'>{props.data.role}</Text>
		 			</Flex>

				{isImage
					? <Image
							src={`/projects/${props.slug}/${props.data.thumb}`}
							gridColumn={props.data.size}
							width='100%'
							height='auto'
							pb={{min: 4, sm: 6}}
							flexes='ccc'
						/>
					: <Video
							src={`/projects/${props.slug}/${props.data.thumb}`}
							poster={`/projects/${props.slug}/${poster}`}
							gridColumn={props.data.size}
							width='100%'
							height='auto'
							pb={{min: 4, sm: 6}}
							flexes='ccc'
						/>
				}
				
			</Flex>

		</Link>
	)
}