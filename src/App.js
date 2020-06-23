import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid'
import { ProductsContextProvider } from './context/ProductsContext'
function App() {
  return (
    <ProductsContextProvider>
    <div className="App">
      <ProductGrid />
    </div>
    </ProductsContextProvider>
  );
}

export default App;
