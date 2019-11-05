import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    <React.Fragment>
      {Array(100).fill(0).map((ele, i) => (
        <Pixel key={i}/>
      ))}
    </React.Fragment>
  )
}

export default App
