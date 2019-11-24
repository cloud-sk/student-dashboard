import React from 'react';
import { connect } from 'react-redux';
import '../styles/login.scss'

function Login(props) {
    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <p><input type="text" placeholder="enter user name" /></p>
                <p><input type="password" placeholder="password" /></p>
                <p><button onClick={() => props.history.push('/dashboard')}>Submit</button></p>
            </div>

        </div>
    )
}


export default Login