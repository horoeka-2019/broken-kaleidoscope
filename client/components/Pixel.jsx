import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor()
    },
    potato: 'sasha'
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    })
  }

  onMouseEnterHandler = () => {
    // Turns components green when mouse hovers over them
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'green'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.onMouseEnterHandler}></div>
    )
  }
}

export default Pixel
