import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

import React from 'react'
import Jokes from './Jokes'
import Navbar from './components/Navbar'
import {Box} from './components/box/Box'

function App() {
  return (
    // <><div>App</div>
    // <Jokes /></>
    // console.log("hello");
    <>
      {/* <h1>App</h1> */}
      {/* <Jokes /> */}
      <Navbar />
      <Box header={'Welcome to React'} text1={'How are you?'} text2={'What are you doing'} /> 
      <Box header={'Welcome to School'} text1={'How old are you?'} text2={'What is your course?'} /> 
      <Box header={'.......'} text1={'weeeeeeeeeeeee?'} text2={'youuuuuuuuuuu?'} /> 
    </>
  )
}

export default App
