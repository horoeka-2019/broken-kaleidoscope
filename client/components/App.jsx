import React from 'react'
import Pixel from './Pixel'

let array = []
for (let i = 0; i < 100; i++) {
  array.push('')
}

const App = () => {
  return (
    <React.Fragment>
      <div>React development has begun!</div>
      {array.map((ele, i) => (
        <Pixel key={i}/>
      ))}
    </React.Fragment>
  )
}

export default App
