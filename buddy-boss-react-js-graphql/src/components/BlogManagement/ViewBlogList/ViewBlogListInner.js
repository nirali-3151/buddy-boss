import React, { Component } from 'react'

import {
  MdModeEdit,
  MdDelete
} from 'react-icons/md'

import { EditBlogManagementData } from "../../../reduxStore/Actions/BlogManagement"

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import UserService from '../../../services/userService';
import Routes from '../../../Routes/Routes';

import { liveURL } from '../../../constants/LiveUrl';
import httpClient from '../../../services/httpClient';

class ViewBlogListInner1 extends Component {

  createMarkup = () => {
    return { __html: this.props.blog.description };
  }

  onClickEditBlogBtn = (blog) => {
    this.props.EditBlogManagementData1({ edit_blog_manage_data: blog })
    this.props.history.push(Routes.UpdateBlog)
  }

  onClickDeleteBlogBtn = async (blog) => {
    var newData = {
      blog_manage_id: blog.blog_manage_id,
    }

    const initialData = await httpClient.blogManagementDeleteBlog(newData);
    this.props.getViewBlogManagementData()
  }

  createMarkup = () => {
    return { __html: this.props.BlogManagement.blog_manage_Data_id.description };
  }


  render() {
    const { blog,
      viewBlogOnClickPerticularBlog } = this.props
      

    const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
    const Data = blog.description.match(validEmailRegex)
    return (
      <>
        <div className='view-BLog-list-main-wrapper-desc'
        >
          <div className='view-BLog-list-main-wrapper-desc-inner'
          >
            <div className='view-BLog-list-main-wrapper-desc-left'
              onClick={viewBlogOnClickPerticularBlog}
            >
              <div className='view-BLog-list-main-wrapper-img-wrapper'>
                
                <img src={`${blog.thumbnail_img}`} className="cover2" />
              </div>
            </div>
            <div className='view-BLog-list-main-wrapper-desc-right'>
              <div className='view-BLog-list-main-wrapper-desc-right-title'
                onClick={viewBlogOnClickPerticularBlog}>
                {blog.title}
              </div>

              <div className='view-BLog-list-main-wrapper-desc-right-description'
                onClick={viewBlogOnClickPerticularBlog}>
                <div className='view-BLog-list-main-wrapper-desc-right-description-data'>
                  {!Data ? "" : Data[1]}
                </div>
              </div>
              <div className='view-BLog-list-main-wrapper-desc-right-inner'>
                <div className='view-BLog-list-main-wrapper-desc-right-blog-catagory'
                  onClick={viewBlogOnClickPerticularBlog}>
                  {blog.catagory_name}
                </div>
                <div className='view-BLog-list-main-wrapper-desc-right-edit'>
                  <MdModeEdit
                    onClick={() => this.onClickEditBlogBtn(blog)}
                    className='view-blog-catagory-edit-icon' />
                </div>
                <div className='view-BLog-list-main-wrapper-desc-right-delete'>
                  <MdDelete
                    onClick={() => this.onClickDeleteBlogBtn(blog)}
                    className='view-blog-catagory-edit-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    BlogManagement: state.BlogManagementReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    EditBlogManagementData1: (payload) => dispatch(EditBlogManagementData(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogListInner1);

function ViewBlogListInner(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default ViewBlogListInner;

