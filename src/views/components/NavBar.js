import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from 'react-redux';


function NavBar({classes, setOpen}) {
 const {cart}= useSelector(state=> state)

  return (
    

    <nav className={classes}>
         <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
         <Link to="recipes" onClick={()=>setOpen(false)}>Recipes</Link>
         <Link to="products" onClick={()=>setOpen(false)}>Products</Link>
         <Link to="cart" onClick={()=>setOpen(false)}> <AiOutlineShoppingCart/><span>{cart.total}</span></Link>
        
    </nav>
  )
}

export default NavBar