   
import React from 'react';    
import {NavLink, Route, Switch} from 'react-router-dom';
import { Singers } from './Singers';
import { Song } from './Song';
import { Add } from './Addsong'
import { Delete } from './deletesong';

export const DashBoard = ()=>{
    return (<>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Sonu Nigam">
              <span data-feather="file"></span>
              Sonu Nigam
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Shaan">
              <span data-feather="file"></span>
              Shaan
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Neha kakkar">
              <span data-feather="file"></span>
              Neha kakkar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Daler mehndi">
              <span data-feather="file"></span>
              Daler mehndi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Lucky ali">
              <span data-feather="file"></span>
              Lucky ali
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Arijit singh">
              <span data-feather="file"></span>
              Arijit singh
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Sunidhi chauhan">
              <span data-feather="file"></span>
              Sunidhi chauhan
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Honey singh">
              <span data-feather="file"></span>
              Honey singh
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Badshah">
              <span data-feather="file"></span>
              Badshah
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs/Diljit Dosanjh">
              <span data-feather="file"></span>
              Diljit Dosanjh
            </NavLink>
          </li>
          
        </ul>        
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      </div>

      <Switch>
        <Route path="/" exact component={Singers}/>
        <Route path="/singers" component={Singers}/>
        <Route path="/songs/:singerName" component={Song}/>
        <Route path='/addsong' component={Add}/>
        <Route path='/removesong' component={Delete}/>
        <Route  render={()=><h1 className='text-center'>404 Page Not Found</h1>}/>
      </Switch>

    </main>
  </div>
</div>
</>
    );
}
