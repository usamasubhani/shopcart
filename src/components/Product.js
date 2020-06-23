import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <h1>{ product.name }</h1>
            <p>${Math.floor(Math.random()*100)}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
