import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: 10,
      width: 10,
      backgroundColor: randomHexColor()
    }
  }

  clickHandler = (event) => {
    // event.preventDefault()
    this.setState({
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'salmon'
      }
    })
  }

  mouseEnter = (event) => {
    // event.preventDefault()
    this.setState({
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'olive'
      }
    })
  }

  rightClick = (event) => {
    event.preventDefault()
    this.setState({
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'grey'
      }
    })
  }

  doubleClick = (event) => {
    event.preventDefault()
    this.setState({
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'white'
      }
    })
  }

  dragEnter = (event) => {
    event.preventDefault()
    this.setState({
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'yellow'
      }
    })
  }

  render () {
    return (
      <>
        <div style={this.state.style}className="emptyPixel" onClick={this.clickHandler} onMouseEnter={this.mouseEnter} onContextMenu={this.rightClick} onDoubleClick={this.doubleClick} onDragEnter={this.dragEnter}> </div>
      </>
    )
  }
}

export default Pixel
