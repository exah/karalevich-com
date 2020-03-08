import ReactMarkdown from 'react-markdown'
import {
	MarkdownParagraph,
	MarkdownText,
	MarkdownLink,
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
		const isHalf = src.match(/size=half/i)
		const isLarge = src.match(/size=large/i)

		let path = `/projects/${slug}/`
		let layout = 'default'
		if (src.match(/size=half/i)) layout = 'isHalf'
		if (src.match(/size=fullscreen/i)) layout = 'isLarge'

		if (isImage) {
			return <MarkdownImage src={`${path}${src}`} alt={alt} layout={layout} />
		} else if (isVideo) {
			return <MarkdownVideo src={`${path}${src}`} alt={alt} layout={layout} />
		}
	}

	// Export renderers

	const renderers = {
		text: MarkdownText,
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