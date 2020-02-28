import { Fragment } from 'react'
import { Layout } from './Layout'
import { Flex, Grid, Text, Link, Image, Video } from './system'

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

const setImageSize = ({layout}) => {
	if (layout === 'isHalf') { return '33.33%' }
	else if (layout === 'isFullscreen') { return '100%' }
	else return '66.66%'
}

const setFigSize = ({layout}) => {
	if (layout === 'isHalf') { return '100%' }
	else if (layout === 'isFullscreen') { return '33.33%' }
	else return '50%'
}

const MarkdownImage = props =>
	<Flex
		as='figure'
		width={setImageSize(props)}
		pb={6}
	>
		
		<Image width='100%' src={props.src} />
		
		{props.alt === ' ' ? null :
			<Text
				as='figcaption'
				width={setFigSize(props)}
				alignSelf='right'
				variant='p'
				color='blacks.3'
				mt={2}
			>
				{props.alt}
			</Text>
		}
	</Flex>

MarkdownImage.defaultProps = {
	layout: '2/3',
}

const InlineVideo = props =>
	<>
		<Video src={props.src} />
		<Text
			as='figcaption'
			gridColumn='5/9'
			variant='x'
			color='blacks.3'
			mt={2}
		>
			{props.alt}
		</Text>
	</>

export const renderers = {
	text: MarkdownText,
	paragraph: MarkdownParagraph,
	image: ({src, alt}) => {
		
		let imageSize
		const isHalf = src.match(/size=half/i)
		const isFullscreen = src.match(/size=fullscreen/i)
		const isImage = src.match(/\.png/i)
		const isInlineVideo = src.match(/\.mp4/i)

		if (isImage) {
			if (isHalf) {
				imageSize = 'isHalf'
				return <MarkdownImage src={src} alt={alt} layout={imageSize} />
			}
			else if (isFullscreen) {
				imageSize = 'isFullscreen'
				return <MarkdownImage src={src} alt={alt} layout={imageSize} />
			}
			else return <MarkdownImage src={src} alt={alt} layout={'default'} />
		}
	},
link: MarkdownLink
}