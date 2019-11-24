import React from 'react';
import {connect} from 'react-redux';
import '../styles/login.scss'

function Login(props){
    return(
        <div className="login-page">
           <p><input type="text" placeholder="enter user name" /></p>
           <p><input type="password" placeholder="password" /></p>
           <p><button>Submit</button></p>
        </div>
    )
}


export default Login