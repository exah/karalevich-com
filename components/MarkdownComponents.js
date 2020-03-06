import { Fragment } from 'react'
import { Flex, Text, Link, Image, Video } from './system'

// Utils

const setMediaSize = ({layout}) => {
	if (layout === 'isHalf') return 1/3
	else if (layout === 'isFullscreen') return '91.67%' // -1 column
	else return 1
}

const setMediaClearance = ({layout}) => {
	if (layout === 'default') return {min: 1, sm: 1/3}
}

const setCaptionSize = ({layout}) => {
	if (layout === 'isHalf') return 1
	else if (layout === 'isFullscreen') return 1
	else return {all: 'calc(50% - 8px)'}
}

const setCaptionOffset = ({layout}) => {
	if (layout === 'isFullscreen') return 'calc(36.36% + 16px)'
	else if (layout === 'isHalf') return 1/3
	else return '0'
}

// Markdown components

export const MarkdownText = props =>
	<Text
		variant='p'
		width={'100%'}
		pr={{min: 1, xsm: '50%', sm: '66.66%'}}
		pl={{min: 1, sm: 2}}
		mb={{min: 4, sm: 6}}
	>
		{props.children}
	</Text>

export const MarkdownLink = props =>
	<Link
		variant='x'
		color='tinted'
		width={'33.33%'}
		href={props.href}
		sx={{
			position: 'relative',
			'::before': {
				content: '"·"',
				pr: 1,
			}
		}}
	>
		{props.children[0].props.value}
	</Link>

const MarkdownCaption = props =>
	<Text
		as='figcaption'
		width={setCaptionSize(props)}
		pl={setCaptionOffset(props)}
		pt={2}

		variant='c'
		color='tinted'
	>
		{props.alt}
	</Text>

export const MarkdownImage = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		pr={setMediaClearance(props)}
		flexes='cse'
		pb={ props.alt === ' ' ? {min: 1, sm: 2} : {min: 4, sm: 6} }
		pl={ props.layout !== 'isFullscreen' && {min: 1, sm: 2} }
	>
		<Image width='100%' src={props.src} />
		{ props.alt === ' ' ? null : <MarkdownCaption {...props} /> }

	</Flex>

export const MarkdownVideo = props =>
	<Flex
		as='figure'
		width={setMediaSize(props)}
		pr={setMediaClearance(props)}
		flexes='cse'
		pb={ props.alt === ' ' ? {min: 1, sm: 2} : {min: 4, sm: 6} }
		pl={ props.layout !== 'isFullscreen' && {min: 1, sm: 2} }
	>
		<Video src={props.src}
			autoplay={true}
			loop={true}
			muted={true}
			playsinline={true}
		/>
		{ props.alt === ' ' ? null : <MarkdownCaption {...props} /> }
	</Flex>

export const MarkdownTitle = props =>
	<Text
		variant='h'
		width={1}
		pr={'33.33%'}
		pl={{min: 1, sm: 2}}
		mb={1}
		as='h2'
	>
		{props.children[0].props.children}
	</Text>

export const setMarkdownTitle = props => {
	const element = props.children[0]
	if (element.level === 3) return <MarkdownTitle />
	else return <MarkdownText {...props} />
}

export const MarkdownParagraph = props => {
	const notWrappedElements = ['MarkdownText', 'image', 'video']
	const element = props.children[0]

	if (notWrappedElements.indexOf(element.type.name) >= 0) return element
	else return <MarkdownText>{element}</MarkdownText>
}