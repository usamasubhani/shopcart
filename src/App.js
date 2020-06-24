import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid'
import Navigation from './components/Navigation'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Navigation />
        <ProductGrid />
      </div>
    </GlobalProvider>
  );
}

export default App;
