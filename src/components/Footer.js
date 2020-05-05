import React from 'react';
import '../App.css';

const Footer = () => {
  return (
      <footer className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6">
              <p className="text-uppercase font-weight-bold">Contact Us</p>
              <p>You can contact us on 123-4567-890</p>
            </div>
            <div className="col-md-6">
              <h6 className="text-uppercase font-weight-bold">Return Policy</h6>
              <p>We accept returns after 7 days max</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <span> Shopping</span>
        </div>
      </footer>
  );
};
export default Footer;