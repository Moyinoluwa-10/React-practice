import React from 'react'

const Navbar = () => {
  return (
    <>
    
        <div className='nav-container'>
          {/* Navbar */}
          <h1 className='navHeader' style={{ fontSize: '30px', margin: '0px' }}>Techathon</h1>

          <nav className='navLinks'>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
              </ul>
          </nav>
        </div>
        
        <div><p>Hello</p></div>
    
    </>
  )
}

export default Navbar