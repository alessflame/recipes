import React from "react";
import TextCard from "./TextCard";
import stile from "./style/products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import {setModal} from "../../redux/slice/modalSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
    // <div className={stile.card}>
    //   <img src={image} alt="prodotto" />
    //   <TextCard title={title} text={text} />
    //   <span className={stile.price}>{price}$</span>
    //   <span onClick={() => { addInCart(id);}} className="button">
    //     Add to Cart
    //   </span>
    // </div>

<Card sx={{ maxWidth: 400, p:2, mt:"30px" }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image={image}
    alt="foto corso"
  />
  <CardContent>
    <Typography gutterBottom variant="h3" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     {text}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="large" className="button" sx={{backgroundColor:"#64732F", color:"white"}} onClick={() => { addInCart(id);}}>
    Add to Cart
  </Button>
</CardActions>
</Card>

  );
}

export default ProductCard;
