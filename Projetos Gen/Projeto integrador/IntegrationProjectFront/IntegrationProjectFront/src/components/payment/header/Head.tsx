import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Head.css';
import BasicModal from '../modal/Modal';



function Head() {
    return (
        <>
            <main id='paymentHead'>
                <article id="logo-payment">
                    <a href="#"><img className="payment-img" src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /></a>
                    <h3>Greeniverse</h3>
                    <div className='modal'><BasicModal /></div>

                </article>
                <article id='cartProducts'>
                    <h1 id='FinalizedTitle'>Finalizar compra</h1>
                </article>

            </main>

        </>
    )
}

export default Head; 
