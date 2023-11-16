import React, { Component } from 'react'
import UserService from '../../services/userService';

import { connect } from "react-redux"
import { getLoginToken } from "../../reduxStore/Actions/Login"

import { useHistory } from "react-router-dom";

import NavBar from '../NavBar';
import UserHomePage from '../UserHomePage'

import CreateBlog from '../BlogManagement/CreateBlog/CreateBlog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class UserDashBoard1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_Data: []
    }
  }

  componentDidMount() {
    const { Token } = this.props.LoginPage
    // this.getUsersData()
  }

  //get  User Dataa 
  getUsersData = async () => {
    // const { Token } = this.props.LoginPage
    const Token = localStorage.getItem('Token');
    const initialData = await UserService.getUserDataList(Token);
    this.setState({ user_Data: initialData })
  }

  //logOut User
  onClickLogOutbtn = async () => {
    const { Token } = this.props.LoginPage
    this.props.getLoginToken1({ Token: [] })
    this.props.history.replace('/')
  }

  render() {
    const { Token } = this.props.LoginPage
    const { user_Data } = this.state
    return (
      <div>
        <UserHomePage />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    LoginPage: state.LoginReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginToken1: (payload) => dispatch(getLoginToken(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(UserDashBoard1);

function UserDashBoard(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default UserDashBoard;