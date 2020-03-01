import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import flexes from './flexes'
import merge from 'lodash.merge'
import get from 'lodash.get'

const breakpoints = [
	'24rem',	// 1: 384
	'48em',		// 2: 768
	'64em',		// 3: 1024
	'80em',		// 4: 1280
	'90em',		// 5: 1440
]
breakpoints.min	= '0rem'
breakpoints.xsm	= breakpoints[0]
breakpoints.sm	= breakpoints[1]
breakpoints.md	= breakpoints[2]
breakpoints.lg	= breakpoints[3]
breakpoints.xlg	= breakpoints[4]

const space = [
	0,
	'0.5rem',	// 1: 8px
	'1rem',		// 2: 16px
	'1.5rem',	// 3: 24px
	'2rem',		// 4: 32px
	'3rem',		// 5: 48px
	'4rem',		// 6: 64px
	'5rem',		// 7: 80px
	'6rem',		// 8: 96px
	'7rem',		// 9: 112px
	'8rem',		// 10: 128px
]

const colors = {
	text: '#000',
	bg: '#FFF',
	tinted: 'rgba(0,0,0,.56)',
	ui: 'rgba(0,0,0,.16)',
	modes: {
		dark: {
			text: '#FFF',
			bg: '#000',
			tinted: 'rgba(255,255,255,.56)',
			ui: 'rgba(255,255,255,.16)',
		},
	},
}

const fonts = 'Helvetica Neue, -system, Sans-Serif'
const fontSizes = ['1rem', '1.5rem']
const lineHeights = '1.15'

const text = {
	x: {
		fontSize: [0, null, null, null, 1],
		lineHeight: lineHeights,
		color: 'text',
	},
	p: {
		fontSize: [0, null, null, null, 1],
		lineHeight: lineHeights,
		color: 'text',
		pb: 2,
		':last-child': {
			pb: 0,
		},
		textIndent: '2rem'
	},
}

const styling = {
	caps: { textTransform: 'uppercase' },
}

const links = {
	line: {
		borderBottom: '1px solid',
		borderColor: 'ui',
	},
	dot: {
		color: 'tinted',
		':before': {
			content: '•',
			pr: 1,
		}
	},
}

const variants = {
	flexes,
	styling,
	links,
}

const theme = {
	breakpoints,
	space,
	colors,
	fonts,
	fontSizes,
	lineHeights,
	text,
	variants,
	flexes,
	styling,
	links,
}

const Global = injectGlobal`

	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  border: none;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-size: 16px;
	  font-weight: normal;
	  font-family: ${fonts};
	  -webkit-text-size-adjust: 100%;
	}

	input,
	optgroup,
	select,
	textarea {
	  font-family: inherit;
	  font-size: 100%;
	  margin: 0;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	  -webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
	  border-style: none;
	  padding: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		border-bottom: 1px solid ${colors.transparent};
	}

	h1, h2, h3, h4, p, a, span {
		font-family: inherit;
		font-weight: normal;
		font-size: inherit;
		font-weight: inherit;
	}

	li {
		list-style: none;
	}
`

const modes = ['light', 'dark']

const getTheme = mode =>
	merge({}, theme, {
		colors: get(theme.colors.modes, mode, theme.colors)
	})

export const Theme = ({theme, children}) => {
	return (
		<ThemeProvider theme={getTheme(theme)}>
			<>
			{Global}
			{children}
			</>
		</ThemeProvider>
	)
}
