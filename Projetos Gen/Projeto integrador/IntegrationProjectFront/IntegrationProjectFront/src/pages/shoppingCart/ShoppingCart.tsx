import './ShoppingCart.css';
import InfoProducts from '../../components/cart/infoProducts/InfoProducts';
import Finishing from '../../components/cart/finishing/Finishing';
import FooterTwo from '../../components/cart/footerTwo/FooterTwo';

function ShoppingCart(){
    return(
        <>
        <InfoProducts />
        <Finishing />
        <FooterTwo />
        </>
    );
}

export default ShoppingCart;

