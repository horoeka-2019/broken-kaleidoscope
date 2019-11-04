import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { style: { height: '60px', width: '60px', backgroundColor: 'greenyellow' } }
  }

  handleChange = (event) => {
    const newColor = event.target.value
    this.setState({
      style: { height: '60px', width: '60px', backgroundColor: newColor }
    })
  }
  render () {
    return (
      <div >React development has begun!
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <Pixel style={this.state.style}/>
        <input type='text' name='changeColor' onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default App
