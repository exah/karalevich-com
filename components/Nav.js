import { useState, useEffect, useRef } from 'react'
import { Flex, Link } from './system'
import { Layout } from './Layout'

export default function() {

	const [toggle, setToggle] = useState('')
	const top = global.scrollY
	const ref = useRef(null)

	/*
		const prevTopState = refBounds.top
		if (prevTopState < refBounds.top) return 'show'
		else return 'hide'
	*/

	return (
		<Flex
			ref={ref}
			as='nav'
			gridColumn='1/-1'
			flexes='rbe'
			width='100%'
			pt={1}
			px={{min: 1, sm: 2}}
			sx={{
				position: 'absolute',
				zIndex: 3,
			}}
		>
			<Link href='/' variant='x'>Maksim</Link>
			<Link href='/about' variant='x'>About</Link>
			<Link href='/entries' variant='x'>Entries</Link>
		</Flex>
	)
}