import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import { Link } from "react-router-dom";

function Navigation() {
    const { cart } = useContext(GlobalContext);

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</Link></li>
            </ul>
            
        </div>
    )
}

export default Navigation
