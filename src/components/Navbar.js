import React from 'react';
    
    const Navbar = (props) => {
      return (
        <nav className="navbar navbar-light bg-dark">
          <h3>Shoppr</h3>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => props.show()}>Cart {(props.cart.length)}</button>
        </nav>
      );
    };
    
    export default Navbar;