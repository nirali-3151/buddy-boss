import React, { Component } from 'react'

//import icons 
import { RiLogoutCircleRLine } from "react-icons/ri"

import {setValueOfMenuFlag} from "../../../reduxStore/Actions/FirstPageAction"

//import react-redux dependancies
import { connect } from "react-redux"

import { Link, useHistory } from "react-router-dom";

class Logout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickBlogManagement = () => {
    this.onClickMenuBtn()
    window.localStorage.clear();
    this.props.history.replace('/')
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
            <RiLogoutCircleRLine style={{fontSize :"18px"}} />
            </div>

            <div
              className='create-blog-left-side-blog-manage-right'>
              Logout
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

const Add = connect(mapStateToProps, mapDispatchToProps)(Logout1);

function Logout(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default Logout;

