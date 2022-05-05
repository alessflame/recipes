import React, { useCallback, useEffect } from 'react'
import image1 from "../../images/chef.jpg";
import image2 from "../../images/dieta.jpg";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from '../../redux/slice/productsSlice';
import stile from "./style/products.module.css"

const prodotti=[
     {
          id:1,
          title: "Corso: Diventare 'Green Chef'",
          text:"imparerai i segreti della cucina vegana e vegetariana per lavorare nei migliori ristoranti o aprirne uno tuo.",
          image:image1,
          price:349.99
     },
     {
          id:2,
          title: "Corso: Mantenersi in 'forma'",
          text:"imparerai come mantenerti in forma, grazie al nostro esperto, seguendo da 0 una dieta sana ed equilibrata.",
          image:image2,
          price:149.99,
     },
]


function ProductsContainer() {
   const {products, cart}=useSelector(state => state);
   const dispatch=useDispatch();
//    console.log(products);


  const add = useCallback(()=>{
        dispatch(addProducts(prodotti));
   },[dispatch]);

   useEffect(()=>{
     // console.log(cart.elements);
       add();
     //   console.log(products); 
   },[add, cart.elements, products])


     

  return (
    <div className={stile.container}>

         {products.data.map((product)=><ProductCard key={product.id} {...product}/>)}

    </div>
  )
}

export default ProductsContainer
