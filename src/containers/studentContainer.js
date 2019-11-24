import React from 'react';
import {connect} from 'react-redux';
import StudentDetails from '../components/studentDetails'


function StudentContainer(props){
    return(
        <div>
            <StudentDetails />
        </div>
    )
}


export default connect(null, {})(StudentContainer)