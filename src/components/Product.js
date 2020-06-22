import React from 'react'

const Product = () => {
    return (
        <div>
            <h1>Name</h1>
            <p>${Math.floor(Math.random()*100)}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
