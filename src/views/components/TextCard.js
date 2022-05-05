import React from 'react';
import stile from './style/textCard.module.css';

function TextCard({title, text}) {
  return (
    <div className={stile.card}>
         <h2 className={stile.title}>
              {title}
         </h2>

         <section className={stile.text}>
              {text}
         </section>
    </div>
  )
}

export default TextCard