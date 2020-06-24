import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import ProductGrid from './components/ProductGrid'
import Navigation from './components/Navigation'
import Cart from './components/Cart'

import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (    
      <GlobalProvider>
        <div className="container">          
          <Router>
          <Navigation />
            <Switch>  
            <Route path="/cart" component={Cart} />
            <Route path="/" component={ProductGrid} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    
  );
}

export default App;
