import React, { forwardRef } from 'react'
import { Box, Flex, Grid } from './system/box'
import NextLink from 'next/link'

export { Box, Flex, Grid }

export const Text = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='p'
    tx='text'
    {...props}
  />
)


export const Link = forwardRef((props, ref) => {
  // const isExternal = props.href.match('/\http|https|mailto/i')
  return (
    <NextLink
      href={props.href}
      as={props.nextAs}
      passHref={true}
    >
      <Text
        as='a'
        href={props.href}
        {...props}
    />
    </NextLink>
    )
}
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

export const Video = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='video'
    type="video/mp4"
    {...props}
    controls={false}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)