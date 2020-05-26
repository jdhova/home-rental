import React from 'react';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer-2'>
        <h3>A Better way to rent in Canada</h3>
        <p>
          Give us a call: +1 000 000 000 <br></br>
          Email support: info@unknown.ca<br></br>
          <span>&copy;2020</span>
        </p>
        <div className='font'>
          <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
          <i className='fa fa-twitter fa-2x' aria-hidden='true'></i>
          <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
        </div>
      </div>

      <div className='footer-3'>
        <ul>
          <li>
            <a href=''>Company</a>
          </li>
          <li>
            <a href=''>About US</a>
          </li>
          <li>
            <a href=''>Browse Homes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
