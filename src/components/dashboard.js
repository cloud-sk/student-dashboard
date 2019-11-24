import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/dashboard.scss'


function Dashboard(props) {
    const { studentResults } = props;
    function handler(e) {
        props.submitSearch(e.target.value)
    }
    function toggleName() {
        props.toggleData('name');
    }
    function toggleMarks() {
        props.toggleData('total');
    }
    return (
        <div className="dashboard">
            <div className="header">
                <div className="container">
                    <div className="header-nav">
                        <input type="text" placeholder="Search" onChange={handler} />
                        <button onClick={toggleName}>SortByName</button>
                        <button onClick={toggleMarks}>SortByMarks</button>
                    </div>
                </div>
            </div>
            <div className="student-details">
                {studentResults && studentResults.length ?
                    studentResults.map((value) => {
                        return (
                            <Link to={`/${value.rollNo}`} className="card" key={value}>
                                <div>
                                    <p className="user-name">{value.name}</p>
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