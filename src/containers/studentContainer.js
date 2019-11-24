import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StudentDetails from '../components/studentDetails'
import {getAllStudentDetails} from '../actions/studentActions';


function StudentContainer(props) {
    useEffect(() => {
        props.getAllStudentDetails();
    }, []);
    return (
        <div>
            <StudentDetails student={props.student} />
        </div>
    )
}



const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    const { studentResults = [] } = state.studentReducer;
    return {
        student: studentResults.find((d) => d.rollNo.toString() === id.toString()),
    }
}



export default connect(mapStateToProps, {getAllStudentDetails})(StudentContainer)