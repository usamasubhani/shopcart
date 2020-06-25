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
        <tr>
                <td>
                    <Button color="secondary" onClick={remove}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </Button>{ product.name }
                </td>

                <td>${ product.price }</td>
                
                <td>{ product.quantity }</td>
                
                <td>
                    <Button color="primary" onClick={increaseQtty}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Button color="secondary" onClick={decreaseQtty}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </Button>
                </td>
                
                
        </tr>
    )
}

export default CartItem
