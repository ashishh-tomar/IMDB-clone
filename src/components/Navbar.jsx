import React from 'react'
import Logo from "../logo.png";
 function Navbar() {
  return (
    <div className='border 
    flex items-center
    space-x-8
    pl-12 py-4
    '>
        <img src={Logo} style={{width : "4rem", height:"4rem"}}alt=""></img>
        <h3 className='font-bold text-xl'> Movies </h3>
        <h3 className='font-bold text-xl'> Favourites</h3>
    </div>
  )
}

export default Navbar;
