import React, { useContext } from 'react'
import './Cart.css'
import { GlobalContext } from '../context/GlobalContext'

import CartItem from './CartItem'

const Cart = () => {
    const { cart } = useContext(GlobalContext);
    // console.log(cart)
    return (
        <div className="cart">
            {cart.map(item => (<CartItem key={item.id} product={item} />))}
        </div>
    )
}

export default Cart
