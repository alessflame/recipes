import React, { useEffect, useState } from 'react'
import stile from "./style/slider.module.css"
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"

function Slider({slides=[]}) { 
      const [selected, setSelected]= useState(0);

      const selectedPlus= ()=>{ setSelected(()=>{

           if(selected >= slides.length-1)return 0;
           return(selected+1);
           });

      };

      const selectedMinus=()=>{
           setSelected(()=>{
           if(selected  <= 0) return (slides.length -1);
          return(selected - 1);
            })}



     useEffect(()=>{

        const timer = setInterval(()=> {selectedPlus()}, 3000);

          return ()=>{
               clearInterval(timer);
          }

   
     })

  
  return (
    <div className={stile.slider}>

     <span className={stile.row} onClick={selectedMinus}>{<AiOutlineLeft/>}</span>
         {slides[selected]}
     <span className={stile.row} onClick={selectedPlus}>{<AiOutlineRight/>}</span>


    </div>
  )
}

export default Slider