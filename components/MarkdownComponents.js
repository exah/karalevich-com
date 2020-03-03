import { Fragment } from 'react'
import { Flex, Text, Link, Image, Video } from './system'

// Utils

const setMediaSize = ({layout}) => {
	if (layout === 'isHalf') { return '33.34%' }
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

// Markdown components

export const MarkdownParagraph = props =>
	<Fragment {...props} />

export const MarkdownText = props =>
	<Text
		variant='p'
		width={1/3}
		pl={2}
		mb={6}
	>
		{props.children}
	</Text>

export const MarkdownLink = props =>
	<Link
		variant='x'
		link='line'
		width={1/3}
		href={props.href}
	>
		{props.children}
	</Link>

const MarkdownCaption = props =>
	<Text
		as='figcaption'
		width={setCaptionSize(props)}
		alignSelf={setCaptionAlignment(props)}
		pt={2}
		pl={ props.layout !== 'isHalf' && 2 }

		variant='p'
		color='tinted'
	>
		{props.alt}
	</Text>

export const MarkdownImage = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		flexes='cse'
		pb={6}
		pl={ props.layout !== 'isFullscreen' && 2 }
	>
		<Image width='100%' src={props.src} />
		{ props.alt === ' ' ? null
			: <MarkdownCaption {...props} />
		}

	</Flex>

export const MarkdownVideo = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		flexes='cse'
		pb={6}
		pl={ props.layout !== 'isFullscreen' && 2 }
	>
		<Video src={props.src}
			autoplay={true}
			loop={true}
			muted={true}
			playsinline={true}
		/>
		{ props.alt === ' ' ? null
			: <MarkdownCaption {...props} />
		}
	</Flex>