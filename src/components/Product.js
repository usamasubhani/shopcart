import React, { useContext } from 'react';
import { Card, Typography, CardContent, Button } from '@material-ui/core'

import { GlobalContext } from '../context/GlobalContext'

const Product = ({ product }) => {
    const { addToCart } = useContext(GlobalContext);

    const add = () => {
        addToCart({product});
    }
    return (
        <div className="product">
            <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5">{ product.name }</Typography>
                        <Typography variant="h6">${ product.price }</Typography>
                        <Button variant="outlined" color="primary" size="small" onClick={add}>Add to Cart</Button>
                    </CardContent>
            </Card>
            {/* <h1>{ product.name }</h1>
            <p>${ product.price }</p>
            {/* <p>${Math.floor(Math.random()*100)}</p> */}
            {/* <button onClick={add}>Add to Cart</button> */}
        </div>
    )
}

export default Product
