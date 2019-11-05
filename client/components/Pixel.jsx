import React from 'react'
import randomHexColor from '../utils/randomHexColor'

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

  displayColors = () => {
    this.setState({
      style: {
        ...this.state.style.backgroundColor, randomHexColor()
      }
    })
  }



  render () {
    return (
      <React.Fragment>
        <div style={ this.state.style }
        displayColors={ this.displayColors } >

        </div>

      </React.Fragment>

    )
  }
}
export default Pixel
