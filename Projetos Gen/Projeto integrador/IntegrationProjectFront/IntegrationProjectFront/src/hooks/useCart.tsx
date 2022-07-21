import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Products from '../components/cardProducts/CardProducts';
import Stock from '../models/StockDTO';
import { api } from '../services/Services';

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

export interface CartProduct extends Stock {
    productAmount: number;
}

interface CartContextData {
    cart: CartProduct[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const cartStorageKey = "@greeniverse:cart";

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<CartProduct[]>(() => {
        const storagedCart = localStorage.getItem(cartStorageKey)

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            const productAlreadyInCart = cart.find(product => product.id === productId)

            if (!productAlreadyInCart) {
                const { data: product } = await api.get<Stock>(`/api/Stock/id/${productId}`);

                if (product?.productAmount && product.productAmount > 0) {
                    setCart([...cart, { ...product, productAmount: 1 }])
                    localStorage.setItem(cartStorageKey, JSON.stringify([...cart, { ...product, productAmount: 1 }]))
                    toast.success(product.productName + ' adicionado ao carrinho', {
                    theme:"colored"
                    })
                    return;
                }
            }

            if (productAlreadyInCart) {
                const { data: product } = await api.get<Stock>(`/api/Produtos/id/${productId}`);

                if (product?.productAmount && (product.productAmount > productAlreadyInCart.productAmount)) {
                    const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
                        ...cartItem,
                        productAmount: Number(cartItem.productAmount) + 1
                    } : cartItem)

                    setCart(updatedCart)
                    localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
                    return;
                } else {
                    toast.error('Quantidade solicitada fora de estoque')
                }
            }
        } catch {
            toast.error('Erro na adição do produto')
        }
    };

    const removeProduct = (productId: number) => {
        try {
            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na remoção do produto');
                return
            }

            const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount < 1) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const response = await api.get<Stock>(`/api/Stock/id/${productId}`);
            const productAmount = response.data?.productAmount ?? 0;
            const stockIsFree = amount > productAmount

            if (stockIsFree) {
                toast.error('Quantidade solicitada fora de estoque')
                return
            }

            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
                ...cartItem,
                productAmount: amount
            } : cartItem)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}