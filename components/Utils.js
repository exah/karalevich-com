import React, { useEffect, useState } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Flex } from './system'

export const GlobalBg = props =>
<Global
  styles={css`
    :root {
      background-color: ${props.bg};
      /*animation: fadein .25s;
      @keyframes fadein {
        from {opacity: 0}
        to {opacity: 1}
      }*/
    }
  `}
/>

const HelperGrid = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`

const HelperColumn = styled(Flex)`
  width: calc(100% / 12);
  border-right: 1px solid rgba(0, 0, 255, 0.32);
  &:first-of-type {
    border-left: 1px solid rgba(0, 0, 255, 0.32);
  }
`

export const HelperLayout = () => {
  const [active, setActive] = useState(true)
  useEffect(() => {
    window.addEventListener('keydown', toggleActive)
    return () => {
      window.removeEventListener('keydown', toggleActive)
    }
  })
  const toggleActive = e => {
    if (e.ctrlKey && e.keyCode === 71) {
      setActive(!active)
    }
  }
  if (active) {
    return (
      <HelperGrid>
        {[...Array(12)].map((n, i) => (
          <HelperColumn key={i} />
        ))}
      </HelperGrid>
    )
  }
  return null
}