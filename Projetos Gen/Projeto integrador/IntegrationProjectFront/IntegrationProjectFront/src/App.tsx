import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import RegisterUser from './pages/register/RegisterUser';
import Payment from './pages/payment/Payment';
import './App.css';
import store from './store/store';
import Providers from './pages/providers/Providers'
import Product from './components/statics/product/Product';
import { CartProvider } from './hooks/useCart';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
    useEffect(() => {
        document.title = "Greeniverse";
    }, []);

    return (

        <Provider store={store}>
            <ToastContainer />
            <Router>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/registeruser' element={<RegisterUser />} />
                    <Route path='/providers' element={<Providers />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/allproducts' element={<Product />} />
                </Routes>
                </CartProvider>
            </Router>
        </Provider>
    )
}

export default App;