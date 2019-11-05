import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      height: 50,
      width: 50,
      backgroundColor: 'cornflowerblue'
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.state.style}
      </React.Fragment>
    )
  }
}

export default Pixel
