import ReactMarkdown from 'react-markdown'
import {
	MarkdownParagraph,
	MarkdownText,
	MarkdownLink,
	MarkdownList,
	MarkdownListItem,
	MarkdownImage,
	MarkdownVideo,
	setMarkdownTitle,
	MarkdownTitle,
} from './MarkdownComponents'

export const ReactMarkdownContainer = props => {

	const slug = props.slug

	// Switch Media components

	const setMediaComponent = ({src, alt}) => {
			
		const isImage = src.match(/\.jpg|png|gif/i)
		const isVideo = src.match(/\.mp4/i)
		const isSmall = src.match(/size=sm/i)
		const isLarge = src.match(/size=lg/i)

		let path = `/projects/${slug}/`
		let layout = 'default'
		if (src.match(/size=sm/i)) layout = 'isSmall'
		if (src.match(/size=lg/i)) layout = 'isLarge'

		if (isImage) {
			return <MarkdownImage src={`${path}${src}`} alt={alt} layout={layout} />
		} else if (isVideo) {
			return <MarkdownVideo src={`${path}${src}`} alt={alt} layout={layout} />
		}
	}

	// Export renderers

	const renderers = {
		text: MarkdownText,
		list: MarkdownList,
		listItem: MarkdownListItem,
		paragraph: MarkdownParagraph,
		image: ({src, alt}) => setMediaComponent({src, alt}),
		link: MarkdownLink,
		heading: MarkdownTitle
	}

	return (
		<ReactMarkdown
			source={props.source}
			renderers={renderers}
			escapeHtml={false}
		/>
	)
}