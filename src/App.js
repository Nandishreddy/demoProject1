import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Nav ,Navbar } from 'react-bootstrap'

import './App.css';

import Home from './components/Home'
import Products from './components/Products'
import ProductShow from './components/ProductShow'
import Orders from './components/Orders'
import Footer from './components/Footer'
import ProductContext from './context/product-context'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>Drawing Pencils</h1>
          <ProductContext.Provider 
            value={{cartitems: [],
                    itemDetails: [],
                    items: []
                    
                    }}>

          </ProductContext.Provider>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products/">Products</Nav.Link>
              <Nav.Link href="/orders/">Orders</Nav.Link>
            </Nav>
          </Navbar>
         
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/products" component={Products} exact={true} />
              <Route path="/products/:id" component={ProductShow} />
              <Route path="/orders" component={Orders} />
            </Switch>
        </div>
      </BrowserRouter>
      <Footer /> 
    </div>

  );
}

export default App;
