import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/statics/navbar/Navbar';
import Banner from '../../components/statics/banner/Banner';
import Features from '../../components/statics/features/Features';
import Footer from '../../components/statics/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import CardProducts from '../../components/cardProducts/CardProducts';
import HomeProducts from '../../components/homeProducts/HomeProducts';

function Home(){

    let navigate = useNavigate();

    /* -- USE THIS CODE IN EVERY PAGE THAT WANT TO VALIDATE THE USER ACCESS LIKE USER PANEL FOR EXAMPLE --
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == ""){
            alert("Você precisa estar logado para acessar esta página!");
            navigate('/login');
        }
    }, [token]);
    */

    /* Local storage no longer supported, now we are using redux. So
       replace everywhere in the project that still using the local
       storage with redux, following the code above */
    // const [token, setToken] = useLocalStorage('token');

    return(
        <>
        <Navbar />
        <Banner />
        <Features />
        <HomeProducts />
        <Footer />


        </>
    );
}

export default Home;