import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Products from './admin/Products';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './main/Main';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path='/' component={Main}/>
          <Route path='/admin/products' component={Products} />
          <Route exact path='/admin/admin/products/create' component={ProductCreate} />
          <Route exact path='/admin/admin/products/:id/edit' component={ProductEdit} />

          {/* <ProductCreate /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
