import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const startingState = {
    products: [
        { id: 1, name: 'WOW', price:10},
        { id: 2, name: 'Nice', price:20},
        { id: 3, name: 'EE', price:99},
        { id: 4, name: 'SS', price:33},
        { id: 5, name: 'CC', price:2},
    ],
    cart: []
}

export const GlobalContext = createContext(startingState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    function addToCart(product) {
      dispatch({
        type: 'addToCart',
        payload: product
      })
    }

    return (<GlobalContext.Provider value={{
        products: state.products,
        cart: state.cart,
        addToCart
      }}>
        {children}
      </GlobalContext.Provider>);

}