import React from 'react';
import {connect} from 'react-redux';


function Login(props){
    return(
        <div>
           <input type="text" placeholder="enter user name" />
           <input type="password" placeholder="password" />
           <button>Submit</button>
        </div>
    )
}


export default Login