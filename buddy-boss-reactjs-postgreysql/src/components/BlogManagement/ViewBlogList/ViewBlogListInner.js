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

import { socket } from '../../../assets/socket/socket_link'

//redux operation
import {
  getBlogManagementData,
} from '../../../reduxStore/Actions/BlogManagement'

import {
  getFirstPageAllBlogDataNextPage,
} from "../../../reduxStore/Actions/FirstPageAction"


class ViewBlogListInner1 extends Component {

  createMarkup = () => {
    return { __html: this.props.blog.description };
  }

  onClickEditBlogBtn = (blog) => {
    this.props.EditBlogManagementData1({ edit_blog_manage_data: blog })
    this.props.history.push(Routes.UpdateBlog)
  }

  onClickDeleteBlogBtn = async (blog) => {

    const { blog_manage_Data } = this.props.BlogManagement

    var newData = {
      blog_manage_id: blog.blog_manage_id,
    }

    const initialData = await UserService.blogManagementDeleteBlogList(newData);

    socket.emit("delete_blog", blog.blog_manage_id);

    socket.on("get_data_after_delete", (data) => {
      const Data = blog_manage_Data.filter(x => {
        return x.blog_manage_id != data;
      })
      this.props.getBlogManagementData1({ blog_manage_Data: Data })
      this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData })

    });
  }

componentDidMount() 
{
  socket.on("send_to_user" , (data) => {
    console.log("data is : " , data);
  })
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

                <div className='View-blog-list-enabled-desabled-btn'>
                  <div className={blog.blog_status_flag ? "view-blog-list-dot-icon-enabled" :"view-blog-list-dot-icon-disabled"}></div>
                  <div className='view-blog-list-enable-desable'>
                    {blog.blog_status_flag ? "Enabled" : "In Review"}
                  </div>
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
    FirstPage: state.FirstPageReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogManagementData1: (payload) => dispatch(getBlogManagementData(payload)),
    EditBlogManagementData1: (payload) => dispatch(EditBlogManagementData(payload)),
    getFirstPageAllBlogDataNextPage1: (payload) => dispatch(getFirstPageAllBlogDataNextPage(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogListInner1);

function ViewBlogListInner(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default ViewBlogListInner;

