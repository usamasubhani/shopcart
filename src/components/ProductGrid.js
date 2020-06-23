import React, { useContext } from 'react'
import Product from './Product'
import { ProductsContext } from '../context/ProductsContext'

const ProductGrid = () => {
    const { message, setMessage } = useContext(ProductsContext);
    console.log(message)
    return (
        <div>
            <p>{message}</p>
            
            {/* {products.map(product => (<Product product={product} />))}             */}
        </div>
    )
}

export default ProductGrid
