import { Layout } from './Layout'
import { Flex, Text, Link, Image, Video } from './system'

const MarkdownText = props =>
	<Text
		variant='x'
		gridColumn='1/5'
		px={2}
		{...props}
	/>

const MarkdownLink = props =>
	<Link gridColumn='1/5' {...props} />

const MarkdownParagraph = props =>
	<Layout pb={6} {...props} />

const MarkdownImage = props =>
	<>
		<Image
			src={props.src}
			gridColumn={props.width}
		/>
		<Text as='figcaption'
			variant='x'
			gridColumn='5/9'
		>
			{props.alt}
		</Text>
	</>

MarkdownImage.defaultProps = {
	width: '1/9'
}

const InlineVideo = props =>
	<>
		<Video src={props.src} />
		<Text as='figcaption'>{props.alt}</Text>
	</>

export const renderers = {
	text: MarkdownText,
	paragraph: MarkdownParagraph,
	image: ({src, alt}) => {
		
		let output = ''
		const isImage = src.match(/\.png/i)
		const isInlineVideo = src.match(/\.mp4/i)
		
		if (isImage) return <MarkdownImage src={src} alt={alt} />
		else if (isInlineVideo) return <InlineVideo src={src} alt={alt} />
		else return <Link href={src}>{alt}</Link>
	},
link: MarkdownLink
}