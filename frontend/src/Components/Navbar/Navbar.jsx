import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

 const Navbar = () => {
   const {getTotalCartItems} = useContext(ShopContext);

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Diamond Cosmetics </p>
     </div>
     <ul className='nav-menu'>
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