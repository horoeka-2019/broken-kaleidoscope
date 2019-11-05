import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      backgroundColor: 'black',
      height: 12,
      width: 12
    }
  }

  changeColor = () => {
    const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: 12,
        width: 12
      } })
  }

  render () {
    return (
      <>
      <div style={this.state.style} onMouseOver={this.changeColor}>
      </div>
      </>)
  }
}

export default Pixel
