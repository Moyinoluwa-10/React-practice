import React from 'react'
import './box.css'

// Method 1 of rendering props

// export const Box = (props) => {
//   // console.log(props);

//   return (
//     <div className='box-container'>
//       <h1>{props.header}</h1>
//       <p>{props.text1}</p>
//       <p>{props.text2}</p>
//     </div>
//   )

// }


// Method 2 of rendering props

// export const Box = (props) => {

//     const { header, text1, text2 } = props
  
//   return (
//     <div className='box-container'>
//       <h1>{header}</h1>
//       <p>{text1}</p>
//       <p>{text2}</p>
//     </div>
//   )
// }


// Method 3 of rendering props

export const Box = ({header, text1, text2, className, border,arr, item}) => {
  console.log(item?.name);
  
  const renderArr = arr?.map((num) => {    // OPTIONAL CHAINING
    // console.log(num);
    return <p key={num.toString()}>{num}</p>;     // ALWAYS ADD A KEY WHEN RENDERING A LIST OR WHEN MAPPING THROUGH AN ARRAY
  })

  return (

    <>
    <div className={className ? className : 'box-container'} style={{border: border || '4px solid #333', margin:'0 auto 50px auto', maxWidth: '600px'}}>
      <h1>{header ? header: 'HELLO'}</h1>
      <p>{text1}</p>
      <p>{text2}</p>
      <div>{renderArr}</div>
      {item?.name}
    </div>

    </>
  )
}


// export default Box