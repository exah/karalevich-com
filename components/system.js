import React, { forwardRef } from 'react'
import { Box, Flex, Grid } from './system/box'

export { Box, Flex, Grid }

export const Text = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='p'
    tx='text'
    {...props}
  />
)

export const Link = forwardRef((props, ref) =>
  <Text
    as='a'
    {...props}
  />
)

export const Button = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='button'
    variant='primary'
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontSize: 'inherit',
      p: 3,
      color: 'black',
      bg: 'accent',
      border: 0,
      borderRadius: 0,
    }}
  />
)

export const Input = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='input'
    type='text'
    tx='forms'
    variant='input'
    {...props}
    __css={{
      display: 'block',
      p: 3,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      borderRadius: '0',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
)

export const Image = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='img'
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)