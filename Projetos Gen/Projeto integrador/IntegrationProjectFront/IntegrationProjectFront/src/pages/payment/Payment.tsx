import React from 'react';
import Head from '../../components/payment/header/Head';
import FinalizedPurchase from '../../components/payment/finalizedPurchase/FinalizedPurchase';
import BasicModal from '../../components/payment/modal/Modal';


function Payment() {
    return(
        <>
        <Head />
        <FinalizedPurchase />
        </>
    )
}

export default Payment;