import React, { useRef, useState } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { doAjax } from '../utils/ajax';
import { Singers } from './Singers';

export const Register = ()=>{

    const userid = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [message, setMessage] =useState('');
    
    const doRegister = ()=>{
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        let uname = name.current.value;
        const userObject = {"userid":uid, "password":pwd, "name":uname};
       // console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_REGISTER_URL, 'POST', json);
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
    
   
       
        return (
        <main className='login'>
            <h1> Register</h1>
            <h2>{message}</h2>
        <div className='form-floating'>
            <input ref={name} className='form-control' type='text' placeholder='Type Name Here...'/>
            &nbsp;&nbsp;&nbsp; 
            <label>Name</label>
        </div>
        <div className='form-floating'>
            <input ref={userid} className='form-control' type='text' placeholder='Type User Name Here...'/>
            &nbsp;&nbsp;&nbsp; 
            <label>User Name</label>
        </div>
        <div className='form-floating'>
            <input ref={password} className='form-control' type='password' placeholder='Type Password Here...'/>
            &nbsp;&nbsp;&nbsp; 
            <label>Password</label>
        </div>
        
        <div className='form-group'>
            <NavLink className='nav-link' to='/'>
            <button onClick={doRegister} className="w-100 btn btn-lg btn-outline-success">Register</button>
            </NavLink>
            &nbsp;&nbsp;                  
        </div>

        <Switch>
        <Route path="/" exact component={Singers}/>
        </Switch>
    </main>
        )
    }