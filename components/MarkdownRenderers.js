import { Fragment } from 'react'
import { Layout } from './Layout'
import { Flex, Grid, Text, Link, Image, Video } from './system'

// Base markdown components

const MarkdownText = props =>
	<Text
		variant='p'
		width={1/3}
		pl={2}
		mb={6}
	>
		{props.children}
	</Text>

const MarkdownLink = props =>
	<Link
		color='blacks.2'
		variant='x'
		width={1/3}
		href={props.href}
	>
		{props.children}
	</Link>

const MarkdownParagraph = props =>
	<Fragment {...props} />



// Set media layout

const setMediaSize = ({layout}) => {
	if (layout === 'isHalf') { return '33.33%' }
	else if (layout === 'isFullscreen') { return '100%' }
	else return '66.68%'
}

const setCaptionSize = ({layout}) => {
	if (layout === 'isHalf') { return '100%' }
	else if (layout === 'isFullscreen') { return '33.33%' }
	else return '50%'
}

const setCaptionAlignment = ({layout}) => {
 if (layout === 'default') { return 'right' }
 else if (layout === 'isFullscreen') { return 'center' }
	else return 'start'
}

const MarkdownImage = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		flexes='cse'
		pb={6}
	>  

		<Image width='100%' src={props.src} />
		{props.alt === ' ' ? null
		: <Text
				as='figcaption'
				width={setCaptionSize(props)}
				alignSelf={setCaptionAlignment(props)}
				mt={2}
				variant='p'
				color='blacks.3'
			>
				{props.alt}
			</Text>
		}

	</Flex>

const InlineVideo = props =>
	<>
		<Video src={props.src} playsinline autoplay mute />
		<Text
			as='figcaption'
			width={setCaptionSize(props)}
			variant='p'
			color='blacks.3'
			mt={2}
		>
			{props.alt}
		</Text>
	</>

// Switch Components

const setMediaComponent = ({src, alt}) => {
		
	const isImage = src.match(/\.jpg/i)
	const isVideo = src.match(/\.mp4/i)
	const isHalf = src.match(/size=half/i)
	const isFullscreen = src.match(/size=fullscreen/i)

	let layout = 'default'
	if (src.match(/size=half/i)) layout = 'isHalf'
	if (src.match(/size=fullscreen/i)) layout = 'isFullscreen'

	if (isImage) {
		return <MarkdownImage src={src} alt={alt} layout={layout} />
	} else if (isVideo) {
		return <MarkdownVideo src={src} alt={alt} layout={layout} />
	}
}

export const renderers = {
	text: MarkdownText,
	paragraph: MarkdownParagraph,
	image: ({src, alt}) => setMediaComponent({src, alt}),
link: MarkdownLink
}