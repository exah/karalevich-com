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
		variant='x'
		width={1/3}
		href={props.href}
	>
		{props.children}
	</Link>

const unwrapLink = props => {
	const {children} = props

	if (children && children[0]
    && children.length === 1
    && children[0].props
    && children[0].props.href) {

    return <MarkdownLink {...props} /> 
  }
  return <MarkdownText {...props} />
}

const MarkdownParagraph = props =>
	<Fragment {...props} />



// Set media layout

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

const MarkdownImage = props =>
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

const MarkdownVideo = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		flexes='cse'
		pb={6}
		pl={ props.layout !== 'isFullscreen' && 2 }
	>
		<Video src={props.src} autoplay loop muted playsinline />
		{ props.alt === ' ' ? null
			: <MarkdownCaption {...props} />
		}
	</Flex>

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

// Export renderers

export const renderers = {
	text: MarkdownText,
	paragraph: MarkdownParagraph,
	image: ({src, alt}) => setMediaComponent({src, alt}),
	link: (props) => unwrapLink(props),
}