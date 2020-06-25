import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

import { Paper, Button } from '@material-ui/core'
const CartItem = ({ product }) => {
    const { removeFromCart } = useContext(GlobalContext);

    const remove = () => {
        removeFromCart(product.id)
    }
    return (
        <div className="cartItem">
            <Paper elevation={3}>
            <span>{ product.name }</span>
            <span>${ product.price }</span>
            <Button color="secondary" onClick={remove}>X</Button>
            </Paper>
        </div>
    )
}

export default CartItem
