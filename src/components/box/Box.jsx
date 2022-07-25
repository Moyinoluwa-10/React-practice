import React from 'react'
import './box.css'

export const Box = (props) => {
  console.log(props);
  return (
    <div className='box-container'>
      {/* Box */}
      <h1>{props.header}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  )
}

// export default Box