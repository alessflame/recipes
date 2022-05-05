import React from "react";
import TextCard from "./TextCard";
import stile from "./style/products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import {setModal} from "../../redux/slice/modalSlice";

function ProductCard({ id, text, title, image,price }) {
  const { products, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const control=(id)=>{
    const element = cart.elements.filter((element) => element.id === id);
    if(element[0]){dispatch(setModal("già presente nel carrello")); return true;}
    return false;

  }


  const addInCart = (id) => {
   if(control(id)) return;
    const element = products.data.filter((element) => element.id === id);
    dispatch(addToCart(element[0]));
  };

  return (
    <div className={stile.card}>
      <img src={image} alt="prodotto" />
      <TextCard title={title} text={text} />
      <span className={stile.price}>{price}$</span>
      <span onClick={() => { addInCart(id);}} className="button">
        Add to Cart
      </span>
    </div>
  );
}

export default ProductCard;
