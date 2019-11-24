import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/dashboard.scss'


function Dashboard(props){
    const {studentResults} = props;
    function handler(e){
        if(e.key === 'Enter'){
            props.submitSearch(e.target.value)
        }
    }
    function toggleName(){
        props.toggleData('name');
    }
    function toggleMarks(){
        props.toggleData('total');
    }
    return(
        <div className="dashboard">
            <div className="header">
                <input type="text" placeholder="Search" onKeyDown={handler}/>
                 <button onClick={toggleName}>toggleName</button> 
                 <button onClick={toggleMarks}>toogleMarks</button>  
            </div>
            <div className="student-details">
            {studentResults && studentResults.length ?
                studentResults.map((value) => {
                    return (
                        <Link to={`/${value.rollNo}`}>
                            <div key={value} className="card">
                              <p> Name: {value.name}</p>
                              <p> Total Marks: {value.total}</p>
                              <p>Roll No: {value.rollNo}</p>
                        </div>
                        </Link>
                        
                    )
                })
                : null
        }
            </div>
           
        </div>
    )
}


export default Dashboard