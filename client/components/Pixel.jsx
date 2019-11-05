import React from 'react'

class Pixel extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style= {{
          height: '50px',
          width: '50px',
          backgroundColor: 'red'
        }}></div>
      </React.Fragment>

    )
  }
}

export default Pixel
