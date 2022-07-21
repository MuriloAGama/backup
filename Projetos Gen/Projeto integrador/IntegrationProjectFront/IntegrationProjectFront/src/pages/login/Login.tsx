import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, } from 'react-router-dom';
import { login } from '../../services/Services';
import User from '../../models/User';
import AuthenticationDTO from '../../models/AuthenticationDTO';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import './Login.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useLocalStorage('token');

    /* Local storage no longer supported, now we are using redux. So
       replace everywhere in the project that still using the local
       storage with redux */
    // const [token, setToken] = useLocalStorage('token');

    const [user, setUser] = useState<AuthenticationDTO>(
        {
            email: '',
            password: ''
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/api/Authentication`, user, setToken);
            toast.info("Login realizado com sucesso!", {
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                type: "success",
                theme: "colored"

            });

        } catch (error) {
            toast.error("Email ou senha incorretos, verifique e tente novamente!", {
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                type: "error",
                theme: "colored"

            });
        }
    }

    useEffect(() => {
        if (token !== '') {
            navigate('/Home');
        }
    }, [token, navigate]);


    return (
        <>
            <main id='mnId'>
                <section>
                    <article id='form_login'>
                        <a id='iconBack' href="http://localhost:3000/Home" target="black" rel="noopener noreferrer">
                            <ArrowBackSharpIcon style={{ fontSize: 30, color: "black", alignItems: "flex-start" }} />
                        </a>

                        <Typography variant='h3' gutterBottom component='h3' className='text2'> Entrar </Typography>

                        <form onSubmit={onSubmit} id='form_login'>
                            <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' size='small' />
                            <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' size='small' />
                            <Button className='buttonLogin' type='submit' variant='contained' size="small" > Login </Button>
                        </form>
                        
                        <Box className='linkLogin'>
                            <Link to='/registeruser'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='texts1'> Não tem uma conta ainda? Cadastre-se </Typography>
                            </Link>
                        </Box>

                    </article>
                    <article id='imgLogin'>
                        <img className='imgLogoLogin' src="https://i.imgur.com/G5Vhf5L.png" alt="Logo" />
                    </article>
                </section>
            </main>
        </>
    );
}

export default Login;