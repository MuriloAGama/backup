import React from 'react';
import './Features.css';

function Features() {

  return (

    <section className="features" id="features">

      <h1 className="heading"> Nossos <span>benefícios</span> </h1>

      <div className="box-container">

        <div className="box">
          <img src="https://i.imgur.com/0E01fuQ.png" alt="" />
          <h3>Fresco e orgânico</h3>
          <p>Nossos produtos são escolhidos a dedo para trazer o que um produto orgânico pode proporcionar.</p>
        </div>

        <div className="box">
          <img src="https://i.imgur.com/J7sWavE.png" alt="" />
          <h3>Delivery grátis</h3>
          <p>Em compras a partir de R$200,00 nosso frete é grátis</p>
        </div>

        <div className="box">
          <img src="https://i.imgur.com/TSWaGie.png" alt="" />
          <h3>Pagamento fácil</h3>
          <p>Pagamento facilitado para você adquirir seus produtos sem enrolação.</p>
        </div>

      </div>
    </section>


  );

}

export default Features;