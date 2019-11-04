import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: 100,
      width: 100,
      backgroundColor: randomHexColor()
    }
  }

  clickHandler = (event) => {
    // event.preventDefault()
    this.setState({
      style: {
        height: 100,
        width: 100,
        backgroundColor: 'salmon'
      }
    })
  }

  render () {
    return (
      <>
        <div style={this.state.style}className="emptyPixel" onClick={this.clickHandler}></div>
      </>
    )
  }
}

export default Pixel
