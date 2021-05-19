import './App.css';
import React from 'react';
import ProductDetail from './components/ProductDetail';
import Main from './views/Main';
import { Router } from '@reach/router';
import ProductEdit from './components/ProductEdit';


function App() {
  return (
    <div className="App">
      <h1>PRODUCT MANAGER</h1>
      <Router>
        <Main path="/"/>
        <ProductDetail path="products/:id"/>
        <ProductEdit path="products/edit/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
