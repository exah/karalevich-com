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

/* Flexbox snippets */
const flexes = variant({
  scale: 'flexes',
  prop: 'flexes',
  variants: 'flexes',
})
/* Paddings */
const paddings = variant({
  scale: 'paddings',
  prop: 'ps',
  variants: 'paddings',
})
/* Margins */
const margins = variant({
  scale: 'margins',
  prop: 'ms',
  variants: 'margins',
})
/* Text styling */
const styling = variant({
  scale: 'styling',
  prop: 'styling',
  variants: 'styling',
})
/* Link styling */
const links = variant({
  scale: 'links',
  prop: 'link',
  variants: 'links',
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
  paddings,
  margins,
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