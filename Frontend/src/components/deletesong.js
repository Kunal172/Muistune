import React, { useRef } from 'react';
import { doAjax } from '../utils/ajax';
import { NavLink} from 'react-router-dom';
import './style.css';

export const Delete = ()=>{
    
    const name = useRef('');

    const doDelete = ()=>{
        console.log(name);
        let nameid = name.current.value;
        const userObject = {'name':nameid};
        console.log('URL is ',process.env.REACT_APP_DELETE_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_DELETE_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Rec From Server ',data);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
    
        return (
            <main>
            <h1> Delete A Song</h1>
        <div className='form-group'>
            <label>Song Name</label>
            <input ref={name} className='form-control' type='text' placeholder='Type Song Name....'/>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className='form-group'>
            <NavLink className='center' to='/singers'>
                <button onClick={doDelete} className='btn btn-warning'>DELETE</button>
            </NavLink>
        </div>
    </main>
        )
    }