import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Flex } from './system'

const HelperGrid = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`;

const HelperColumn = styled(Flex)`
  border-right: 1px solid rgba(0, 0, 255, 0.16);
  width: calc(100vw / 12);
`;

export default () => {
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