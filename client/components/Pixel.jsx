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
        height: '100px',
        width: '100px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  turnGreen = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'green'
      }
    })
  }

  turnBlack = (evt) => {
    evt.preventDefault()

    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'black'
      }
    })
  }

  turnWhite = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'white'
      }
    })
  }

  turnYellow = () => {
    // evt.preventDefault()

    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'yellow'
      }
    })
  }

  render () {
    return (
      <React.Fragment>
        <div style={this.state.style} onMouseEnter={this.turnGreen} onContextMenu={this.turnBlack} onDoubleClick={this.turnWhite} onDragEnter={this.turnYellow}>

        </div>
      </React.Fragment>
    )
  }
}

export default Pixel
