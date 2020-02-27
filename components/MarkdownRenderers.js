import { Layout } from './Layout'
import { Text, Link, Image, Video } from './system'

const MarkdownText = props =>
	<Text
		variant='x'
		gridColumn='1/5'
		px={2}
		{...props}
	/>

const MarkdownLink = props =>
	<Link
		gridColumn='1/5'
		{...props} 
	/>

const MarkdownParagraph = props =>
	<Layout
		pb={6}
		{...props} 
	/>

const MarkdownImage = props =>
	<>
		<Image
			src={props.src}
			gridColumn={props.width}
		/>
		<Text as='figcaption'
			gridColumn='5/9'
			variant='x'
		>
			{props.alt}
		</Text>
	</>

MarkdownImage.defaultProps = {
	width: '1/9',
}

const InlineVideo = props =>
	<>
		<Video src={props.src} />
		<Text as='figcaption'
			gridColumn='5/9'
			variant='x'
		>
			{props.alt}
		</Text>
	</>

export const renderers = {
	text: MarkdownText,
	paragraph: MarkdownParagraph,
	image: ({src, alt}) => {
		
		let output = ''
		const isImage = src.match(/\.png/i)
		const isInlineVideo = src.match(/\.mp4/i)
		const isHalf = src.match(/size=half/i) ? '1/5' : '1/9'
		
		if (isImage || isHalf) return <MarkdownImage src={src} alt={alt} width={isHalf} />
		else if (isInlineVideo) return <InlineVideo src={src} alt={alt} />
		else return <Link href={src}>{alt}</Link>
	},
link: MarkdownLink
}