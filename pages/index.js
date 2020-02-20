import React from 'react'
import { Theme } from '../components/system/theme'

import {
  Meta,
	Nav,
  Intro,
  SelectWork,
} from '../components/bridge'

import HelperGrid from '../components/utils'

const App = props =>
  <Theme>
    <Meta
      name={props.name}
      description={props.description}
      keywords={props.keywords}
      title={props.title}
      url={props.url}
    />
    <Nav />
    <Intro />
    <SelectWork />
    <HelperGrid />
  </Theme>

export default App

App.getInitialProps = async () => {
  const configData = await import(`../data/config.json`)
  return {
    ...configData.default,
  }
}