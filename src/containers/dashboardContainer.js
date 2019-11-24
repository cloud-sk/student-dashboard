import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/dashboard'
import {getAllStudentDetails, submitSearch, toggleData} from '../actions/studentActions';


class DashboardContainer extends React.Component{
    componentDidMount(){
        this.props.getAllStudentDetails();
    }
    submitSearch = (searchParam) => {
        this.props.submitSearch(searchParam);
    }
    toggleData = (param) => {
        this.props.toggleData(param);
    }
    render(){
        const {studentResults} = this.props;
        return(
            <div>
                <Dashboard studentResults={studentResults} submitSearch={this.submitSearch} toggleData={this.toggleData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {studentResults} = state.studentReducer;
    return {studentResults}
}

const mapDispatchToProps =  {
    getAllStudentDetails,
    submitSearch,
    toggleData
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)