import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HooksHeader() {
  return (  
    <div>
    <nav className='navbar navbar-expand-sm bg-light navbar-light'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          
          <li className='nav-item'>
            <Link className='nav-link' to="use-state">UseState Demo </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="use-context">UseContext Demo </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="class-demo">Class Demo </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="use-effect">Use Effect Demo </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="custom-hook">Use Effect Demo </Link>
          </li>


        </ul>
      </div>
    </nav>
    <Outlet></Outlet>
    </div>
    

  );
}

export default HooksHeader;