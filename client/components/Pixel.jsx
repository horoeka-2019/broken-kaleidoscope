import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'red'
      }

    }
  }

  render () {
    return (
      <React.Fragment>
        <div style={ this.state.style }>

        </div>

      </React.Fragment>

    )
  }
}
export default Pixel
