import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/login'


function LoginContainer(props){
    return(
        <div>
            <Login />
        </div>
    )
}


export default connect(null, {})(LoginContainer)