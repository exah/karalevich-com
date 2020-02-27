import { Fragment } from 'react'
import { Layout } from './Layout'
import { Flex, Grid, Text, Link, Image, Video } from './system'

const MarkdownText = props =>
	<Text
		variant='x'
		gridColumn='1/5'
		px={2}
		mb={6}
	>
		{props.children}
	</Text>

const MarkdownLink = props =>
	<Link
		color='blacks.2'
		gridColumn='1/5'
		href={props.href}
	>
		{props.children}
	</Link>

const MarkdownParagraph = props =>
	<Fragment {...props} />

const MarkdownImage = props =>
	<Grid
		as='figure'
		gridColumn='1/9'
		gridTemplateColumns='repeat(2, 1fr)'
		gridColumnGap={1}
		pb={6}
	>
		<Image
			src={props.src}
			gridColumn={props.layout}
		/>
		{props.alt === ' ' ? null :
			<Text
				as='figcaption'
				gridColumn={props.layout}
				width='50%'
				variant='x'
				color='blacks.3'
				mt={2}
			>
				{props.alt}
			</Text>
		}
	</Grid>

MarkdownImage.defaultProps = {
	layout: '1/9',
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
		
		let output = ''
		const isImage = src.match(/\.png/i)
		const isInlineVideo = src.match(/\.mp4/i)
		const isHalf = src.match(/size=half/i) ? '1/2' : '1/-1'
		
		if (isImage || isHalf) return <MarkdownImage src={src} alt={alt} layout={isHalf} />
		else if (isInlineVideo) return <InlineVideo src={src} alt={alt} />
		else return <Link href={src}>{alt}</Link>
	},
link: MarkdownLink
}