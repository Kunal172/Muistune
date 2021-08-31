import React from 'react';
import {NavLink} from 'react-router-dom';
import { DashBoard } from './DashBoard';
import './style.css';
import img from './IMAGES/MUISTUNE.png';


export const NavBarAdmin=({msgadmin})=>{
    return (
    <>
  <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a className="navbar-brand" href="#">
           <img src={img} alt="MUSITUNE" className="image"/>
          </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href='' className="nav-link px-6 text-white">HOME</a></li>
          <li><a href="/singers" className="nav-link px-6 text-white">SINGERS</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
            <h6 className='text-uppercase'>{msgadmin}</h6>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

          <NavLink to="/addsong">
            <button className="nav-item text-nowrap, btn btn-outline-success btn-sm" >
                Add
            </button>
          </NavLink>
            &nbsp; &nbsp; &nbsp; 
          <NavLink to="/removesong">
            <button  className="nav-item text-nowrap, btn btn-outline-warning btn-sm">
                Delete
            </button>
          </NavLink>
            &nbsp; &nbsp; &nbsp; 
            <a href="/" className='nav-item text-nowrap, btn btn-outline-danger btn-sm'>Sign Out</a>

        </div>
      </div>
    </div>
  </header>

  <DashBoard/>
    </>
    );
        
}
