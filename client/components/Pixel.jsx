import React from 'react'

class Pixel extends React.Component {
  render () {
    return (
      <>
        <div style={{
          height: 100,
          width: 100,
          backgroundColor: 'salmon'
        }}className="emptyPixel"></div>
      </>
    )
  }
}

export default Pixel
