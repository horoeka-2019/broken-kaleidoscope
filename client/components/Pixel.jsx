import React from 'react'

class Pixel extends React.Component {
state = {
  style: {
    height: 50,
    width: 50,
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
}

clickHandler = () => {
  // const color = this.state.style.backgroundColor

  this.setState({
    style: {
      height: this.state.style.height,
      width: this.state.style.width,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }
  })
}

render () {
  return (
    <div onClick={this.clickHandler} style={this.state.style}>

    </div>
  )
}
}

export default Pixel
