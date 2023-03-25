import React from 'react'
import Logo from "../logo.png";
import {Link} from "react-router-dom"
 function Navbar() {
  return (
    <div className='border 
    flex items-center
    space-x-8
    pl-12 py-4
    '>
        <img src={Logo} style={{width : "4rem", height:"4rem"}}alt=""></img>
        <Link to={"/"} className='font-bold text-xl'> Movies </Link>
        <Link to={"/Favourites"} className='font-bold text-xl'> Favourites</Link>
    </div>
  )
}

export default Navbar;
