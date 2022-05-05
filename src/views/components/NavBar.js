import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from 'react-redux';


function NavBar({classes}) {
 const {cart}= useSelector(state=> state)

  return (
    

    <nav className={classes}>
         <Link to="/">Home</Link>
         <Link to="recipes">Recipes</Link>
         <Link to="products">Products</Link>
         <Link to="cart"> <AiOutlineShoppingCart/><span>{cart.total}</span></Link>
        
    </nav>
  )
}

export default NavBar