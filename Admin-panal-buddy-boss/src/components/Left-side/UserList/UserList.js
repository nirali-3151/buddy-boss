import React, { Component } from 'react'

//import icons 
import { FaBlogger } from "react-icons/fa"

import {setValueOfMenuFlag} from "../../../reduxStore/Actions/FirstPageAction"

//import react-redux dependancies
import { connect } from "react-redux"


import { Link, useHistory } from "react-router-dom";


class UserListLeftSide1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  onClickBlogManagement = () => {
    this.onClickMenuBtn()
    this.props.history.replace('/Admin-panal')
  }

  onClickMenuBtn = () => {
    const {value} = this.props.FirstPage    
    this.props.setValueOfMenuFlag1(value)
}

  render() {

    return (
      <>
        <div className='create-blog-create-new-account'>
          <div
            className='create-blog-left-side-blog-manage'
            onClick={this.onClickBlogManagement}>
            <div className='create-blog-left-side-blog-manage-left'>
              <FaBlogger />
            </div>

            <div
              className='create-blog-left-side-blog-manage-right'
            >
              User List
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    FirstPage: state.FirstPageReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueOfMenuFlag1: (payload) => dispatch(setValueOfMenuFlag(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(UserListLeftSide1);

function UserListLeftSide(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default UserListLeftSide;

