import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'

import {
	Nav,
  Intro,
} from '../components/bridge'

import HelperGrid from '../components/utils'

const App = props =>
  <Theme>
    <Meta />
    <Nav />
    <Intro />
    <HelperGrid />
  </Theme>

export default App