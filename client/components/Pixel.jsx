import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      backgroundColor: 'white',
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

  changeGreen = () => {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: 12,
        width: 12
      } })
  }

  changeBlack = () => {
    this.setState({
      style: {
        backgroundColor: 'black',
        height: 12,
        width: 12
      } })
  }

  render () {
    return (
      <>
      <div style={this.state.style} onClick={this.changeColor} onMouseOver={this.changeGreen} onContextMenu={this.changeBlack}>
      </div>
      </>)
  }
}

export default Pixel
