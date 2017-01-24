import React from 'react'
import { render } from 'react-dom'
import ReactEmoji from './../../src'

const App = () => (
  <ReactEmoji
    emoji={['coffee', 'sunglasses']}
    style={{fontSize: '50px', color: '#1c74b3'}}
  />
)

render(
  <App />,
  document.getElementById('app')
)
