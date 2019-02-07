import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../ducks/reducer'

class Dashboard extends Component{

    componentDidMount(){
        this.props.getUser()
    }
    render(){
        if(!this.props.user.username){
            return <h1>Error: Please log in</h1>
        }
        return(
            <div>{this.props.user.username}'s Account</div>
        )
    }
};

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser}
)(Dashboard);