import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    // this.randomHexColor()
    this.state = { style: { height: '60px', width: '60px', backgroundColor: randomHexColor() } }
  }

  changeColor = (event) => {
    event.preventDefault()
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: randomHexColor() }
    })
  }

  onDoubleClick= (event) => {
    event.preventDefault()
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: 'white' }
    })
  }

  onMouseEnter = (event) => {
    event.preventDefault()
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: 'green' }
    })
  }

  onContextMenu = (event) => {
    event.preventDefault()
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: 'black' }
    })
  }

  onDragEnter = (event) => {
    event.preventDefault()
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: 'yellow' }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.changeColor} onDoubleClick={this.onDoubleClick} onMouseEnter={this.onMouseEnter} onContextMenu={this.onContextMenu} onDragEnter={this.onDragEnter}>
      </div>
    )
  }


 }

export default Pixel
