import { Flex, Grid, Text, Link, Image, Video } from './system'
import { Layout } from './Layout'

export const Project = (props) => {
	const data = props.data
	const slug = props.slug
	
	const isImage = data.thumb.match(/\.jpg|png/i)
	const isVideo = data.thumb.match(/\.mp4/i)

	const setProjectSize = props => {
		if (props === 'lg') return '2/-2'
		else if (props === 'md') return '3/-3'
		else return '4/10'
	}
	
	let poster = ''
  if (isVideo) poster = data.thumb.replace(/\.mp4/i, '.jpg')

	return (
		<Link
			href={`/p/${slug}`}
			gridColumn='1/-1'
			gridRow={data.position}
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
		}}>

			<Flex
				gridColumn='2/-2'
				pb={2}
				flexes={{min: 'css', sm: 'rss'}}
			>
				<Text width={{min: 1, sm: 1/3}} variant='x'>{data.title}</Text>
				<Text width={{min: 1, sm: 1/3}} variant='x'>{data.lead}</Text>
				<Text width={{min: 1, sm: 1/3}} variant='x'>{data.role}</Text>
			</Flex>

				{isImage
					? <Image
							src={`/projects/${slug}/${data.thumb}`}
							gridColumn={setProjectSize(data.size)}
							width='100%'
							height='auto'
							pb={{min: 4, sm: 6}}
							flexes='ccc'
						/>
					: <Video
							src={`/projects/${slug}/${data.thumb}`}
							poster={`/projects/${slug}/${poster}`}
							gridColumn={setProjectSize(data.size)}
							width='100%'
							height='auto'
							pb={{min: 4, sm: 6}}
							flexes='ccc'
						/>
				}

		</Link>
	)
}