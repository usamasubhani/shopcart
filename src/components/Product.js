import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

const Product = ({ product }) => {
    const { addToCart } = useContext(GlobalContext);

    const add = () => {
        addToCart({product});
    }
    return (
        <div className="product">
            <h1>{ product.name }</h1>
            <p>${ product.price }</p>
            {/* <p>${Math.floor(Math.random()*100)}</p> */}
            <button onClick={add}>Add to Cart</button>
        </div>
    )
}

export default Product
