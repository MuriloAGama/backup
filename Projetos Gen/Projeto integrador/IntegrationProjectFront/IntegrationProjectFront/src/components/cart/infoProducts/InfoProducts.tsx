import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './InfoProducts.css';

function InfoProducts() {
    return (
        <>
            <main id='cart'>
                <article id="logo-cart">
                <a href="#"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /></a>
                    <h3>Greeniverse</h3>
                </article>
                <article id='cartProducts'>
                    <h1 id='cartTitle'>Meu Carrinho</h1>
                    <section className='container'>
                        <div className="products">
                            <h3>Produto</h3>
                        </div>
                        <h3>Preço</h3>
                        <h3>Quantidade</h3>                       
                        <div className="total">
                            <h3>Total</h3>
                        </div>                        
                    </section>
                    <a href="/home" id='linkProducts'><h4>Escolha mais produtos</h4></a>
                </article>
            </main>
        </>
    );
}

export default InfoProducts;