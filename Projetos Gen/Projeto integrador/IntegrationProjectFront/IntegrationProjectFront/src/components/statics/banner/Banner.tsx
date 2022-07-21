import React from 'react';
import './Banner.css'

function Banner() {
  return (


    <section className="banner" id="banner">


      <div className="content">
        <h3>Compre e <span>ajude uma ONG</span></h3>
        <p>Todo valor arrecadado nas doações é redirecionado para ONGs que atendem as necessidades dos nossos ideais de agroeconomia, fome e desnutrição.</p>
        <a href="/allproducts" className="btn">Comprar já</a>
      </div>
      
    </section>

  )
}

export default Banner;