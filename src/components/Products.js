import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Product from './Product';
import Cart from './Cart';
import Navbar from './Navbar';
import ProductShow from './ProductShow';
import Orders from './Orders'
import ProductContext from '../context/product-context'


class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartitems: [],
      itemDetails: [],
      items: []
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addItem = (item) => {
    this.setState({
      cartitems: this.state.cartitems.concat([item])
    });
  }

  productDetails = (id) => {
    const items = this.state.items
    const detail = items.filter(item => id === item.id)
    this.setState({ itemDetails: detail })
  }

static contextType = ProductContext;

componentDidMount = () => {
  console.log(this.context.items)
}

  render() {
    const items = this.state.items;
    const itemssent = this.state.cartitems;
    const det = this.state.itemDetails
    return (
      <div>
        
          <Navbar cart={itemssent} show={this.showModal} />
          <Cart show={this.state.show} items={itemssent} handleClose={this.hideModal}>
          </Cart>
          <div className="container mt-4">
            <div className="row">
              {this.context.items.map(item => <Product key={item.id}
                product={item}
                addItem={this.addItem}
                details={this.productDetails} />)}
            </div>
          </div>
          <ProductShow name={det}></ProductShow>
          <Orders items={itemssent} />        
      </div>
    )
  }
};

export default Products;