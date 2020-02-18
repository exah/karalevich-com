// Fork of 'rebass'
// https://github.com/rebassjs/rebass

import React from 'react'
import styled from '@emotion/styled'
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  grid,
  variant,
} from 'styled-system'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

const sx = props => css(props.sx)(props.theme)
const base = props => css(props.__css)(props.theme)
const __variant = ({
  theme,
  variant,
  tx = 'variants',
}) =>
  css(
    get(theme, tx + '.' + variant,
      get(theme, variant)
    )
  )(theme)

/* Add flexbox snippets */
const flexes = variant({
	key: 'flexes',
	prop: 'flexes',
})
/* Add text styling */
const styling = variant({
	key: 'styling',
	prop: 'styling',
})
/* Add link styling */
const links = variant({
  key: 'links',
  prop: 'link',
})

export const Box = styled('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
},
  base,
  flexes,
  styling,
  links,
  __variant,
  variant,
  sx,
  props => props.css,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
    grid,
  ),
)

export const Flex = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
})

export const Grid = styled(Box)({
	display: 'grid',
})