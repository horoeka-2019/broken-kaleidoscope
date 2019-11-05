import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      backgroundColor: 'grey',
      height: 30,
      width: 30
    }
  }

  changeColor = () => {
    const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: 30,
        width: 30
      } })
  }

  changeGreen = () => {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: 30,
        width: 30
      } })
  }

  changeBlack = () => {
    this.setState({
      style: {
        backgroundColor: 'black',
        height: 30,
        width: 30
      } })
  }

  changeWhite = () => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: 30,
        width: 30
      } })
  }

  changeYellow = () => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: 30,
        width: 30
      } })
  }

  recolorTimer = setInterval(this.changeColor, 0.001)

  render () {
    return (
      <>
      <div style={this.state.style} onClick={this.changeColor} onMouseEnter={this.changeGreen} onContextMenu={this.changeBlack} onDoubleClick={this.changeWhite} onDragEnter={this.changeYellow}>
      </div>
      </>)
  }
}

export default Pixel
