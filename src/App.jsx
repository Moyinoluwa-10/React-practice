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

import Jokes from './Jokes'
import Navbar from './components/Navbar'
import {Box} from './components/box/Box'
import Children from './components/Children'

function App() {
  // console.log("hello");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  
  const objArr = [
    {
      name: 'Foo',
      age: 22,
      class: 'JS1'
    },

    {
      name: 'Foo',
      age: 12,
      class: 'JS1'
    },

    {
      name: 'Tunde',
      age: 13,
      class: 'JS32'
    },

    {
      name: 'Favour',
      age: 14,
      class: 'JS3'
    },

    {
      name: 'Tolu',
      age: 15,
      class: 'SS1'
    },

    {
      name: 'Bola',
      age: 16,
      class: 'SS2'
    },

    {
      name: 'Hammed',
      age: 17,
      class: 'SS3'
    }

  ];

  const renderObjArr = objArr.map((item, index) => {
    // console.log(item);
    return <Box item={item} key={index} />;
  })

  return (
    <>

      {/* <><div>App</div> */}
      {/* <h1>App</h1> */}
      {/* <Jokes /> */}  
      <Navbar />
    
      {/* <Box 
      header={'Welcome to React'} 
      text1={'How are you?'} 
      text2={'What are you doing'} 
      className={'box1'} 
      border={'2px solid green'}
      arr={arr}
      /> 

      <Box 
      // header={'Welcome to School'} 
      text1={'How old are you?'} 
      text2={'What is your course?'} 
      // className={'box2'} 
      // border={'2px solid blue'} 
      /> 
      
      <Box 
      header={'.......'} 
      text1={'weeeeeeeeeeeee?'} 
      text2={'youuuuuuuuuuu?'} 
      className={'box3'} 
      border={'2px solid grey'} 
      />

      {renderObjArr} */}

      < Children >
        <p>Hello World!!!</p>
      </Children>

    </>
  )
}

export default App
