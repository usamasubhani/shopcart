import React, { createContext, useState } from 'react'

export const ProductsContext = createContext("Nice");

const { Provider } = ProductsContext;

export const ProductsContextProvider = (props) => {

    const [message, setMessage] = useState("WOW");

    return (
      <Provider value={[message, setMessage]}>
        {props.children}
      </Provider>
    )
}