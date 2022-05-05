import React from 'react'
import image1 from "../../images/breakfast-g175488b4c_640.jpg";
import image2 from "../../images/sauce-arrabiata-g480357983_640.jpg"
import image3 from "../../images/diet.jpg";
import Slider from '../components/Slider';
import Slide from '../components/Slide';

const slides=[
  <Slide image={image1} text="Abbiamo selezionato le migliori 100 ricette per permettere ai nostri utenti
  di conoscere la cucina 'GREEN'e di preparare piatti deliziosi. " title="Ricette Green"/>,
  <Slide image={image3} text="Conoscere la cucina vegetariana è fondamentale per seguire una dieta 
  sana ed equilibrata. " title="Benessere"/>,
  <Slide image={image2} text="Per conoscere tutti i segreti di una dieta Green segui i corsi che 
  abbiamo creato per aiutarti a raggiungere il tuo obiettivo." title="Impara"/>
]


function Home() {
  return (
    <div>
      <Slider slides={slides}/>
    </div>
  )
}

export default Home