import React, { useEffect, useState } from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import './CardProducts.css';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stock from '../../models/StockDTO';
import { buscaCategoria } from '../../services/Services';
import { useCart } from '../../hooks/useCart';

export default function ProductsSearch() {
    return (
        <div className='App'> 
    <div className='container-input'>
    </div>
    <div className='container-list'>
        <ul>
            
        </ul>
    </div>
    </div>
    );
    
}