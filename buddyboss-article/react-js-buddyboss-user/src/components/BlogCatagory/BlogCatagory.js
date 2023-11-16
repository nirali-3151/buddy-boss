import React, { Component } from 'react'

import { FaBlogger } from "react-icons/fa"

import { useHistory } from "react-router-dom";

import { connect } from "react-redux"

import {setValueOfMenuFlag} from "../../reduxStore/Actions/FirstPageAction"

import '../../Design/blogCatagory.css'

class BlogCatagory1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_manage_flag: false
    }
  }

  //navigate to add blog catagory  onclick Add blog catagory
  onClickAddBlogCatagory = () => {
    this.onClickMenuBtn()
    this.props.history.replace('/user-dashboard/Blog-catagory')
  }

  onClickMenuBtn = () => {
    const {value} = this.props.FirstPage    
    this.props.setValueOfMenuFlag1(value)
}

  render() {
    return (
      <>
        <div className='create-blog-create-new-account'>
          <div className='create-blog-left-side-blog-manage' onClick={this.onClickAddBlogCatagory}>
            <div className='create-blog-left-side-blog-manage-left'>
              <FaBlogger />
            </div>

            <div className='create-blog-left-side-blog-manage-right'>
              Blog Catagory
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

const Add = connect(mapStateToProps, mapDispatchToProps)(BlogCatagory1);

function BlogCatagory(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default BlogCatagory;

