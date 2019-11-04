import React from 'react'

class Pixel extends React.Component {
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  state = {
    style: {
      height: '100px',
      width: '100px',
      backgroundColor: this.randomHexColor()
    }
  }

  changeColor = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor()
      }
    })
  }

  render () {
    return (
      <React.Fragment>
        <div style={this.state.style} onClick={this.changeColor}>

        </div>
      </React.Fragment>
    )
  }
}

export default Pixel
