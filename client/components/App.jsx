import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  render () {
    const rows = []
    for (let i = 0; i < 500; i++) {
      rows.push(<Pixel key={i}/>)
    }
    return <div>{rows}</div>
  }
}

export default App
