import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

const CartItem = ({ product }) => {
    const { addToCart } = useContext(GlobalContext);

    const add = () => {
        addToCart({product});
    }
    return (
        <div className="cartItem">
            <p>{ product.name }</p>
            <p>${ product.price }</p>
            {/* <button onClick={add}>Add to Cart</button> */}
        </div>
    )
}

export default CartItem
