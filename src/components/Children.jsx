import React from 'react'
import Navbar from './Navbar'

const Children = ({children}) => {
  return (
    <div>
        {/* Children */}
        <Navbar />
        <div>{children}</div>
    </div>
  )
}

export default Children