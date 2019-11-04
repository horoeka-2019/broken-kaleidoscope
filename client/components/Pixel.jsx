import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      height: '100px',
      width: '100px',
      backgroundColor: 'cornflowerblue'
    }
  }
  render () {
    return (
      <React.Fragment>
        <div style={this.state.style}>
        </div>
      </React.Fragment>
    )
  }
}

export default Pixel
