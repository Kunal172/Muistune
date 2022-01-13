import React from 'react';    
import { DashBoard } from './DashBoard';
import img from './IMAGES/MUISTUNE.png';
import './style.css';


export const NavBar=({msg})=>{
    return (
    <>
  <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a className="navbar-brand" href="#">
            <img src={img} alt="MUSITUNE" className="image"/>
          </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="" className="nav-link px-6 text-white" >HOME</a></li>
          <li><a href="/singers" className="nav-link px-6 text-white">SINGERS</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searchuser">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end nav_user">
          <h6 className='text-uppercase'>{msg}</h6>
          <a href="/" className='nav-item text-nowrap, btn btn-outline-danger btn-sm'>Sign Out</a>

        </div>
      </div>
    </div>
  </header>

  <DashBoard/>
    </>
    );
}