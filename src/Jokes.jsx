 import React from 'react'
import { job, age, name, hobby } from './value';

// function Jokes() {
//   return (
//     <div>Jokes</div>
//   )
// }

const Jokes = () => {

  // const age = 20;
    return (

      // console.log('How is work?');
      <>
        <div>Jokes</div>
        <div>{hobby}</div>
        <div>{job}</div>
        <div>{name}</div>
        <h1 className='heading' >How are you?</h1>
        <p >What's up?</p>
        <p>{age}</p>
      </>
    )
}



export default Jokes