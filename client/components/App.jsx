import React from 'react'
import Pixel from './Pixel'

// const App = () => {
//   return (
//     <React.Fragment>
//       <div>React development has begun!</div>
//       { let rows = []
//         for (let i=0, i<100, i++) {

//       }}

//
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//     </React.Fragment>
//   )
// }

class App extends React.Component {
  render () {
    const rows = []
    for (let i = 0; i < 9706; i++) {
      rows.push(<Pixel key={i}/>)
    }
    return <div>{rows}</div>
  }
}

export default App
