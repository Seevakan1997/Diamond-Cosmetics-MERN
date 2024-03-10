import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

 const Navbar = () => {
   const {getTotalCartItems} = useContext(ShopContext);

    const [menu,setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
         menuRef.current.classList.toggle('nav-menu-visible')
         e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Diamond Cosmetics </p>
     </div>
     <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
     <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "shop" ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("face")}><Link style={{textDecoration:'none'}} to='/face'>Face</Link> {menu === "face" ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("body")}><Link style={{textDecoration:'none'}} to='/body'>Body</Link> {menu === "body" ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("hair")}><Link style={{textDecoration:'none'}} to='/hair'>Hair</Link> {menu === "hair" ? <hr/>:<></>}</li>
     </ul>
     <div className='nav-login-cart'>
        <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
     </div>
    </div>
  )
}

export default Navbar