import { Fragment } from 'react'
import { Flex, Text, Link, Image, Video } from './system'

// Utils:
// Set media width based on url param
const setMediaSize = ({layout}) => {
	if (layout === 'isSmall') return {min: '100%', xsm: '50%', sm: '33.33%'}
	else if (layout === 'isLarge') return {min: '100%', sm: '91.67%'} // -1 column
	else return '100%'
}
// Clear from right if next block is 1/3
const setMediaClearance = ({layout}) => {
	if (layout === 'default') return {min: 1, sm: '33.33%'}
	else if (layout === 'isSmall') return {min: 1, sm: 0}
}
// Set caption width based on media width
const setCaptionSize = ({layout}) => {
	if (layout === 'isSmall') return '100%'
	else if (layout === 'isLarge') return '100%'
	else return {min: '100%', sm: 'calc(50% - 8px)'}
}
// Fix caption paddings
const setCaptionOffset = ({layout}) => {
	if (layout === 'isLarge') return {min: '0', sm: 'calc(36.36% + 16px)'}
	else return '0'
}

// Markdown components

export const MarkdownText = props =>
	<Text
		variant='p'
		width={'100%'}
		pr={{min: '8.33%', xsm: '50%', sm: '66.66%'}}
		pl={{min: 1, sm: 2}}
		mb={{min: 4, sm: 6}}
	>
		{props.children}
	</Text>

export const MarkdownList = props =>
	<Text
		as='ul'
		variant='x'
		width={'100%'}
		pr={{min: '8.33%', xsm: '50%', sm: '66.66%'}}
		pl={{min: 1, sm: 2}}
		mb={{min: 4, sm: 6}}
		sx={{
			listStyle: 'square'
		}}
	>
		{props.children}
	</Text>

export const MarkdownListItem = props =>
	<Text
		as='li'
		variant='x'
		width={'100%'}
		pr={{min: 1, sm: 0}}
		ml={{min: 1, sm: 2}}
		my={{min: 1, sm: 1}}
		sx={{
			listStyle: 'square'
		}}
	>
		{props.children[0].props.children}
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
		textAlign={{min: 'center', sm: 'left'}}

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
		pl={ props.layout !== 'isLarge' && {min: 1, sm: 2} }
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
		pl={ props.layout !== 'isLarge' && {min: 1, sm: 2} }
	>
		<Video
			src={props.src}
			poster={props.src.replace('mp4', 'jpg')}
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