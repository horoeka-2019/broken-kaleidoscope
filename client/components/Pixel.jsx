import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '3px',
      width: '3px',
      backgroundColor: randomHexColor()
    },
    potato: 'sasha'
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: randomHexColor()
      }
    })
  }

  onMouseEnterHandler = () => {
    // Turns components green when mouse hovers over them
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: 'green'
      }
    })
  }

  onContextMenu = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: 'black'
      }
    })
  }

  onDoubleClickHandler = () => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: 'white'
      }
    })
  }

  onDragEnterHandler = () => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: 'yellow'
      }
    })
  }

  componentDidMount () {
    setInterval(this.clickHandler, Math.random() * 1000 + 1000)
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.onMouseEnterHandler} onContextMenu={this.onContextMenu} onDoubleClick={this.onDoubleClickHandler} onDragEnter={this.onDragEnterHandler}></div>
    )
  }
}

export default Pixel
