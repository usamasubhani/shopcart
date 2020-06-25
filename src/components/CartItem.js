import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

import { Paper, Button } from '@material-ui/core'
const CartItem = ({ product }) => {
    const { removeFromCart, increase, decrease } = useContext(GlobalContext);

    const remove = () => {
        removeFromCart(product.id)
    }

    const increaseQtty = () => {
        increase(product.id);
    }

    const decreaseQtty = () => {
        if (product.quantity <= 1) {
            remove()
        } else {
            decrease(product.id);
        }
    }
    return (
        <div className="cartItem">
            <Paper elevation={3}>
            <span>{ product.name }</span>
            <span>${ product.price }</span>
            <span>{ product.quantity }</span>
            <Button color="secondary" onClick={remove}>X</Button>
            <Button color="secondary" onClick={increaseQtty}>+</Button>
            <Button color="secondary" onClick={decreaseQtty}>-</Button>
            </Paper>
        </div>
    )
}

export default CartItem
