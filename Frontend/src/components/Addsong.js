import React, { useRef} from 'react';
import {NavLink} from 'react-router-dom';
import { doAjax } from '../utils/ajax';
import './style.css';

export const Add = ()=>{
    
    const name = useRef('');
    const url = useRef('');
    const imageurl = useRef('');
    const artistName = useRef('');

    const doAdd = ()=>{
        console.log(name,artistName);
        let nameid = name.current.value;
        let urlid = url.current.value;
        let imageid = imageurl.current.value;
        let artistid = artistName.current.value;
        const userObject = {"name":nameid, "url":urlid,"imageurl":imageid,"artistName":artistid};
        console.log('URL is ',process.env.REACT_APP_ADD_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_ADD_URL, 'POST', json);
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
            <h1> Add A Song </h1>
        <div className='form-group'>
            <label>Name</label>
            <input ref={name} className='form-control' type='text' placeholder='Type Song Name...'/>
        </div>
        &nbsp;&nbsp;
        <div className='form-group'>
            <label>URL</label>
            <input ref={url} className='form-control' type='text' placeholder='Type Song URL...'/>
        </div>
        &nbsp;&nbsp;
        <div className='form-group'>
            <label>Image URL</label>
            <input ref={imageurl} className='form-control' type='text' placeholder='Type Image URL...'/>
        </div>
        &nbsp;&nbsp;
        <div className='form-group'>
            <label>Artist Name</label>
            <input ref={artistName} className='form-control' type='text' placeholder='Type Artist Name...'/>
        </div>
        &nbsp;&nbsp;
        <div className='form-group'>
            <NavLink  to='/singers'>
            <button onClick={doAdd} className='btn btn-success'>ADD</button>
            </NavLink>
        </div>
    </main>
        )
    }