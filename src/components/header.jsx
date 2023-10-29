import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (  
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          
          <li className='nav-item'>
            <Link className='nav-link' to="/">Display Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/counter">Counter Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/list-colors">ListColors Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/book-store-class">BookStore Class Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/book-store-function">BookStore Function Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/book-store-http-function">BookStore Http Function Component</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/redux-cookie">Redux Cookie Demo</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/redux-book">Redux Book Demo</Link>
          </li>

        </ul>
      </div>
    </nav>
    

  );
}

export default Header;