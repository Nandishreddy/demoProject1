import React from 'react';
import { Link } from 'react-router-dom'
import ProductContext from '../context/product-context'

const Product = (props) => {
  return (
    
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.product.img} className="img-thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <h6 className="card-title">$ {props.product.price}</h6>
          <button className="btn btn-primary" onClick={() => props.addItem(props.product)}>Buy now</button>|
          <button className="btn btn-dark" onClick={() => props.details(props.product.id)}>
            <Link to={`/Products/${props.product.id}`}>DetailsShow</Link></button>
        </div>
      </div>
    </div>
  );
}
export default Product;