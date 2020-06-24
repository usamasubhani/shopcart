import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Navigation() {
    const { cart } = useContext(GlobalContext);

    console.log(cart)
    return (
        <div>
            <p><i class="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</p>
        </div>
    )
}

export default Navigation
