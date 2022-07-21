import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, } from '@material-ui/core'
import { Box, Grid } from '@mui/material'
import './HomeProducts.css'
import { Link } from 'react-router-dom'

function HomeProducts() {
    return (


        <section className="products-section" id="products">

            <h1 className="heading"> Nossos <span>produtos</span> </h1>

            <div className="product-boxes">

                 <div className="product-card">
                    <img className='imgcards' src="https://i.imgur.com/Gn9GBkf.png" alt="" />
                    <h3>Melancia</h3>
                    <div className="price"> R$11.00</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="/allproducts" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img className='imgcards'src="https://i.imgur.com/gpCNczH.jpg" alt="" />
                    <h3>Repolho</h3>
                    <div className="price"> R$7.89</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="/allproducts" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img className='imgcards' src="https://i.imgur.com/LU22SbH.jpg" alt="" />
                    <h3>Banana</h3>
                    <div className="price"> R$11.7</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="/allproducts" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img className='imgcards' src="https://i.imgur.com/5WeyVOf.png" alt="" />
                    <h3>Laranja-Lima</h3>
                    <div className="price"> R$9.90</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="/allproducts" className="btn">Comprar</a>
                </div>
            </div>
            <a href="/allproducts" className='more-product'>Ver mais...</a>

        </section>
    );
}

export default HomeProducts;