import React, { Component } from 'react'
import '../../Design/createBlog.css'
import '../../Design/responsiveCreateBlog.css'
import UserHomePageLeftSide from './AdminHomePageLeftSide'
import UserHomePageRightSide from './AdminHomePageRightSide'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import {setValueOfMenuFlag} from "../../reduxStore/Actions/FirstPageAction"

import { HiMenuAlt3 } from 'react-icons/hi'

class AdminHomePage1 extends Component {
    constructor(props) {
        super(props);
    }

    onClickMenuBtn = () => {
        const {value} = this.props.FirstPage    
        this.props.setValueOfMenuFlag1(value)
    }

    render() {
        const {value} = this.props.FirstPage    
        return (
            <div className='createBlog-main-wrapper'>
                <div className='create-blog-navigation-bar-wrapper'>
                    <div className='create-blog-navigation-bar-wrapper-inner'>
                        <HiMenuAlt3 className='navigation-bar-menu-icon'
                            onClick={this.onClickMenuBtn} />
                    </div>
                    <div className='create-blog-navbar-create-item-wrapper'>
                        {
                            value ? <UserHomePageLeftSide/> : ""
                        }
                    </div>
                    <div className='create-BLog-inner-wrapper-main'>
                        <div className='create-BLog-inner-wrapper-main-left'>
                            <UserHomePageLeftSide />
                        </div>

                        <div className='create-BLog-inner-wrapper-main-right'>
                            <UserHomePageRightSide />
                        </div>
                    </div>
                </div>
            </div>
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
  
  const Add = connect(mapStateToProps, mapDispatchToProps)(AdminHomePage1);
  
  function AdminHomePage(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
  }
  export default AdminHomePage;
