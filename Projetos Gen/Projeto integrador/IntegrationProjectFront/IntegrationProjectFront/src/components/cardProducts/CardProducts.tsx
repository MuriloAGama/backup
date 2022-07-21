import React, { useEffect, useState } from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import './CardProducts.css';
import Stock from '../../models/StockDTO';
import { buscaCategoria } from '../../services/Services';
import { useCart } from '../../hooks/useCart';
import useLocalStorage from 'react-use-localstorage';

export default function CardProducts() {

    const [valueFeiraStorage, setValueFeiraStorage] = useLocalStorage('StorageFeira');
    const [valueOrdenarStorage, setValueOrdenarStorage] = useLocalStorage('StorageOrdenar');
    const [valuePesquisaStorage, setValuePesquisaStorage] = useLocalStorage('StoragePesquisa');

    const [products, setProducts] = useState<Stock[]>([]);

    useEffect(() => {
        getProduct()
    }, [valueFeiraStorage, valueOrdenarStorage, valuePesquisaStorage])

    async function getProduct() {
        await buscaCategoria("/api/Stock/search", setProducts, {
            params: {
                productCategory: valueFeiraStorage,
                queryFilter: valueOrdenarStorage,
                productName: valuePesquisaStorage
            }
        })
    }

    const { addProduct } = useCart();

    function handleAddCart(productId: number) {
        addProduct(productId)
    }

    if (products.length < 1) {
        return (
            <>
            <div className='NotProduct'>
            <h1 className="h1NotProduct"> Desculpe, não possuímos o produto mencionado em estoque!  <span className='spanNotProduct'>Qualquer dúvida ficamos a disposição, obrigado!</span> </h1>
            <img className='imgNotProduct' src="https://i.imgur.com/ptzY2Mh.png" alt="logo" />
            <p className='pNotProduct'>@Equipe Greeniverse</p>
            </div>
                
            </>
        )
    }
    else {
        return (
            <>
                {
                    products.map(product => {
                        return (
                            <Card className='root'>
                                <CardActionArea>
                                    <CardMedia
                                        className='imgCard'
                                        component="img"
                                        alt={product.productName}
                                        image={product.productPhoto}
                                        title={product.productName} />

                                    <CardContent>
                                        <img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" className='logoCard' />
                                        <Typography gutterBottom variant="h5" color="textPrimary" component="h4">
                                            {product.productName}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            {product.productCategory}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            {product.productAmount}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            {product.description}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            Fornecedor: {product.provider}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='cardbtns'>
                                    <h3>
                                        R$ {product.price}
                                    </h3>
                                    <button className='btnComprar' onClick={() => handleAddCart(product.id)}>
                                        Comprar
                                    </button>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </>
        );
    }
}