import { Console } from 'console';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import SideCart from '../../sideCart/SideCart';
import './Navbar.css';

function Navbar() {

    let navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false)
    const [token, setToken] = useLocalStorage('token');


    function showMenu() {
        setMenuActive(true)

        if (menuActive === false) {
            setMenuActive(true)
        }
        else {
            setMenuActive(false)
        }

    }

    function goLogout() {
        setToken('')
        toast.info('Você foi deslogado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined

        });
        navigate('/')
    }

        if (token !== "") {
            return (

                <nav id='navbar'>
        
                    <section id="logo-section">
                        <a href="/home#banner" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
                    </section>
        
                    <section className={`${menuActive === true ? 'active' : ''}`} id='menu'>
                        <Link to="/home">Home</Link>
                        <a href="#features">Benefícios</a>
                        <a href="/allproducts">Produtos</a>
                        <Link to="/providers">Seja um fornecedor</Link>
                        <Link to="/aboutus">Sobre nós</Link>
                    </section>
        
                    <section id='icons'>
                        <label className="fas fa-bars" id="menu-btn" onClick={showMenu}></label>
        

        
                        <label className="fas fa-shopping-cart" id="cart-btn">
                            <div>
                                <SideCart />
                            </div>
                        </label>
        
                        <label htmlFor='checkbox_login' className="fas fa-user" id="login-btn">
        
                            <input type="checkbox" name="checkbox_login" id="checkbox_login" />
                            <form className="login-form">
                            <a href='#' className="btn" onClick={goLogout}>Logout</a>
                            </form>
                        </label>
                    </section>  
                </nav>
        
            )
        }
        
        else {
            return (

                <nav id='navbar'>
        
                    <section id="logo-section">
                        <a href="/home#banner" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
                    </section>
        
                    <section className={`${menuActive === true ? 'active' : ''}`} id='menu'>
                        <Link to="/home">Home</Link>
                        <a href="#features">Benefícios</a>
                        <a href="/allproducts">Produtos</a>
                        <Link to="/providers">Seja um fornecedor</Link>
                        <Link to="/aboutus">Sobre nós</Link>
                    </section>
        
                    <section id='icons'>
                        <label className="fas fa-bars" id="menu-btn" onClick={showMenu}></label>
        
                        <label className="fas fa-shopping-cart" id="cart-btn">
                            <div>
                                <SideCart />
                            </div>
                        </label>
        
                        <label htmlFor='checkbox_login' className="fas fa-user" id="login-btn">
        
                            <input type="checkbox" name="checkbox_login" id="checkbox_login" />
                            <form className="login-form">
                                <h3>Fazer Login</h3>
                            <a href="/login" className="btn">Logar</a>
                            <a href="/registeruser" className="btn">Cadastrar</a>
                            </form>
                        </label>
                    </section>       
                </nav>       
            )
        }
    }

    

export default Navbar;