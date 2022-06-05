import React, { useEffect, useState } from 'react'
import image1 from "../../images/breakfast-g175488b4c_640.jpg";
import image2 from "../../images/sauce-arrabiata-g480357983_640.jpg"
import image3 from "../../images/diet.jpg";
import stile from "./style/slider.module.css"
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import Slide from './Slide';

function Slider() { 
      const [selected, setSelected]= useState(0);

      const slides=[
          {image:image1,
          text:"Abbiamo selezionato le migliori 100 ricette per permettere ai nostri utenti di conoscere la cucina 'GREEN'e di preparare piatti deliziosi.",
          title: "Ricette Green",},
          {image:image3,
          text:"Conoscere la cucina vegetariana è fondamentale per seguire una dieta sana ed equilibrata.",
          title:"Benessere"},
          {image:image2,
          text:"Per conoscere tutti i segreti di una dieta Green segui i corsi che abbiamo creato per aiutarti a raggiungere il tuo obiettivo.",
          title:"Impara"}
         ]

      const control =(num)=>{
           if(num===selected) return true
      };

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

 
         <Slide {...slides[0]} visible={control(0)}/>
         <Slide {...slides[1]} visible={control(1)}/>
         <Slide {...slides[2]} visible={control(2)}/>

    </div>
  )
}

export default Slider