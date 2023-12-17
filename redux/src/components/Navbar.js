import React from 'react'

const Navbar = () => {
  return (
    <div>
        <span className='logo'>REDUX STORE</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
            <span className='cartCount'>
                Cart Items: 0
            </span>
        </div>
    </div>
  )
}

export default Navbar