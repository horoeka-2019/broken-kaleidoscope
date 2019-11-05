import React from 'react'

// components
import Pixel from './Pixel'

const App = () => {
  const filledArray = Array.from({ length: 100000 }, () => (<Pixel />))
  // const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  return [
    filledArray
  ]
}

export default App

// const pixArr = []
//   for (let i = 0; i < 100; i++) {
//     pixArr.push(<Pixel />)
//   }
