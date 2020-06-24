import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import CartItem from './CartItem'

const Cart = () => {
    const { cart } = useContext(GlobalContext);
    // console.log(cart)
    return (
        <div>
            {cart.map(item => (<CartItem key={item.product.id} product={item.product} />))}
        </div>
    )
}

export default Cart
