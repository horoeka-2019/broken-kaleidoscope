import React from 'react'

// components
import Pixel from './Pixel'

const App = () => {
  const pixArr = []
  for (let i = 0; i < 100; i++) {
    pixArr.push(<Pixel />)
  }
  return [
    pixArr
  ]

}

export default App
