import React, { useRef, useState } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { doAjax } from '../utils/ajax';
import { NavBar } from './NavBar';
import { NavBarAdmin } from './NavBarAdmin';
import { Register } from './Register';
import './style.css';
import img from './IMAGES/MUISTUNE1.png';



export const Login = ()=>{
    
    const userid = useRef('');
    const password = useRef('');
    const [message, setMessage] =useState('');
    const doLogin = ()=>{
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        const userObject = {"userid":uid, "password":pwd};
        console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Rec From Server ',data);
                    setMessage(data.message);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
    
   
       if(message.startsWith("Welcome")){
           return (<NavBar msg = {message}/>)
       }
       else if(message.startsWith("Admin")){
           return (<NavBarAdmin msgadmin = {message}/>)
       }
       else{
        return (
        <body className="text-center login">
            <main className='form-signin login'>
                    <h2>{message}</h2>

                    <img src={img} alt="MUSITUNE" class="image"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                
                    <div className="form-floating">
                    <input ref={userid} type="text" className="form-control" placeholder="User ID" />
                    &nbsp;&nbsp;&nbsp; 
                    <label>User ID</label>
                    </div>
                    <div className="form-floating">
                    <input ref={password} type="password" className="form-control" placeholder="Password"/>
                    <label>Password</label>
                    </div>
                    <div className='form-group'> 
                    &nbsp;&nbsp;&nbsp; 
                    <NavLink className='nav-link' to=''>     
                    <button className="w-100 btn btn-lg btn-outline-success" onClick={doLogin}>Sign in</button>
                    </NavLink>
                    </div>
                    <div className='form-group'> 
                    &nbsp;&nbsp;&nbsp; 
                    <NavLink className="nav-link" to="/register">
                    <button className="w-100 btn btn-lg btn-outline-info">Sign Up</button>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                    </NavLink> 
                    </div>

                    <Switch>
                        <Route path="/register" component={Register}/>
                    </Switch>
            </main>
        </body>
            )
        }
    }