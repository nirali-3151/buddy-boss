import React, { Component } from 'react'

import { FaBlogger } from "react-icons/fa"
import { RiLogoutCircleRLine } from "react-icons/ri"

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import { setValueOfMenuFlag } from "../../reduxStore/Actions/FirstPageAction"


class MyAccount1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_manage_flag: false
    }
  }

  onClickBlogManagement = () => {
    this.setState(prevState => ({
      blog_manage_flag: !prevState.blog_manage_flag
    }));
  }

  onClickMenuBtn = () => {
    const { value } = this.props.FirstPage
    this.props.setValueOfMenuFlag1(value)
  }

    // on click logout btn
    onClickLogoutBtn = () => {
      this.onClickMenuBtn()
      window.localStorage.clear();
      this.props.history.replace('/')
    }

    render() {
      const { blog_manage_flag } = this.state

      return (
        <div className='create-blog-create-new-account'>
          <div
            className='create-blog-left-side-blog-manage'
            onClick={this.onClickBlogManagement}>
            <div className='create-blog-left-side-blog-manage-left'>
              <FaBlogger />
            </div>

            <div className='create-blog-left-side-blog-manage-right'>
              My Account
            </div>
          </div>

          {blog_manage_flag ?
            <div className='create-blog-left-side-blog-manage-right-subtitle'
              onClick={this.onClickLogoutBtn}>
              <div className='create-blog-left-side-blog-manage-left-inner-main'>
                <div className='create-blog-left-side-blog-manage-left-inner'>
                  <RiLogoutCircleRLine style={{paddingTop :"3px"}} />
                </div>
                <div>
                  LogOut
                </div>
              </div>
            </div> : ""}
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      LoginPage: state.LoginReducer,
      FirstPage: state.FirstPageReducer
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      setValueOfMenuFlag1: (payload) => dispatch(setValueOfMenuFlag(payload)),
    }
  }

  const Add = connect(mapStateToProps, mapDispatchToProps)(MyAccount1);

function MyAccount(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default MyAccount;

