import { Flex, Text, Link, Image, Video } from './system'
import { Layout } from './bridge'

// Project row
export const Row = props => {

	const data = props.data
	const slug = props.slug

	return (
		<Link
			as='li'
			gridColumn='1/-1'
			href={`/${slug}`}
			py={1}
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
				':hover': {opacity: '.64'},
			}}
		>
			<Text
				gridColumn={{min: '1/-2', sm: '1/5'}}
				pb={{min: 2, md: 0}}
				pl={{min: 1, sm: 2}}
				variant='x'
				color={props.color}
			>
				{props.title}
			</Text>
			<Text
				gridColumn={{min: '1/-2', sm: '5/10'}}
				pb={{min: 2, md: 0}}
				pl={{min: 1, sm: 2}}
				variant='x'
			>
				{props.desc}
			</Text>
			<Text
				gridColumn={{min: '1/-2', sm: '10/-1'}}
				pb={{min: 2, md: 0}}
				pl={{min: 1, sm: 2}}
				variant='c'
			>
				{props.tag}
			</Text>
		</Link>
		)
}

// Project card
export const Card = props => {
	
	const data = props.data
	const slug = props.slug

	const isImage = data.thumb.match(/\.jpg|png/i)
	const isVideo = data.thumb.match(/\.mp4/i)
	
	let poster = ''
  if (isVideo) poster = data.thumb.replace(/\.mp4/i, '.jpg')

	const setProjectSize = props => {
		if 			(props === 'lg')	return {min: '1/-1', sm: '2/-2'}
		else if (props === 'md')	return {min: '1/-1', sm: '3/-3'}
		else if (props === 'sm')	return {min: '1/-1', sm: '4/10'}
		else											return {min: '1/-1', sm: '4/10'}
	}
	
	return (
		<Link
			href={`/${slug}`}
			gridRow={data.position}
			gridColumn='1/-1'
			px={{min: 1, sm: 0}}
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
			}}
		>

			<Flex
				gridColumn={{min: '1/-1', sm: '2/-2'}}
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
							sx={{zIndex: 2}}
						/>
					: <Video
							src={`/projects/${slug}/${data.thumb}`}
							poster={`/projects/${slug}/${poster}`}
							gridColumn={setProjectSize(data.size)}
							width='100%'
							height='auto'
							pb={{min: 4, sm: 6}}
							flexes='ccc'
							sx={{zIndex: 2}}
						/>
				}

		</Link>
	)
}