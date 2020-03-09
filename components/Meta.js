import React from 'react'
import Head from 'next/head'

const name = 'Maksim Karalevich'
const description = 'Select work and notes'
const keywords = 'design, systems, platforms, helpful'

export default function(props) {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		  <meta name={name} />
	  	<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		  
			{/* <meta property="og:image" content="https://rill.logo.jpg" /> */}
			<meta property="image:width" content="1920" />
			<meta property="image:height" content="1080" />
			<meta property="og:title" content={name} />
		  <meta property="og:description" content={description} />
			<meta property="og:url" content="https://karalevich.com" />
			<meta property="og:type" content="website" />
		  <link rel="icon" href="/fav.png" />
		  <title>{props.title}</title>
		</Head>
	)
}