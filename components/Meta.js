import React from 'react'
import Head from 'next/head'

export const Meta = props =>
	<Head>
		<meta charSet='utf-8' />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	  <meta name={props.name} />
  	<meta name="description" content={props.description} />
		<meta name="keywords" content={props.keywords} />
	  
		{/* <meta property="og:image" content="https://rill.logo.jpg" /> */}
		<meta property="image:width" content="1920" />
		<meta property="image:height" content="1080" />
		<meta property="og:title" content={props.name} />
	  <meta property="og:description" content={props.description} />
		<meta property="og:url" content={props.url} />
		<meta property="og:type" content="website" />
	  <link rel="icon" href="/fav.png" />
	  <title>{ props.title === "Maksim Karalevich—Designer" ? props.title : "—" + props.title }</title>
	</Head>