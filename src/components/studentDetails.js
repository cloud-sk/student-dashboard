import React from 'react';
import {connect} from 'react-redux';



function StudentDetails({student = {}}){
    return(
        <div>
            {student.name}
        </div>
    )
}


export default StudentDetails