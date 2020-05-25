import React from 'react';

const Navbar = () => {
  return (
    // <div>
    //   <nav className='navbar navbar-dark bg-dark'>{/* Navbar content */}</nav>
    //   <nav className='navbar navbar-dark bg-primary'>
    //     {/* Navbar content */}
    //   </nav>
    //   <nav
    //     className='navbar navbar-light'
    //     style={{ backgroundColor: '#e3f2fd' }}
    //   >
    //     {/* Navbar content */}
    //   </nav>
    // </div>

    // <div className='main-nav'>
    //   <h2>Home</h2>
    //   <div className='nav-2'>
    //     <ul>
    //       <li> Browse Homes</li>
    //       <li> List your Homes</li>
    //       <li> More about us</li>
    //       <li> Login</li>
    //       <li> Join</li>
    //       <li>Contacts</li>
    //     </ul>
    //   </div>
    // </div>

    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='navbar-collapse collapse w-100 order-2 order-md-0 dual-collapse2'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Browse Homes
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='//codeply.com'>
              Rent your Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About us
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='mx-auto order-0'>
        <a className='navbar-brand mx-auto' href='#'>
          Home
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='.dual-collapse2'
        >
          <span className='navbar-toggler-icon' />
        </button>
      </div>
      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Register
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
