import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      height: 10,
      width: 10,
      backgroundColor: randomColor()
    },
    interval: new Date()
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: 'black'
      }
    })
  }
  mouseEnter = () => {
    this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: randomColor()
      }
    })
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.changeStyleOnInterval(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  changeStyleOnInterval = () => {
    this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: randomColor()
      }
    })
  }

  render () {
    return (
      <div onClick={this.clickHandler} onMouseEnter={this.mouseEnter} style={this.state.style}>

      </div>
    )
  }
}

function randomColor () {
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
}

export default Pixel
