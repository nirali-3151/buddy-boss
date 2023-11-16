import React, { Component } from 'react'
import EditBlogBtn from './EditBlogBtn';

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import UserService from '../../../services/userService';
import { getBlogCatagoryData } from "../../../reduxStore/Actions/BlogCatagory"

import Routes from '../../../Routes/Routes';
import httpClient from '../../../services/httpClient';


class EditBlogCatagory1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: {
        catagory_name: "",
      }
    }
  }

    //back to the yuser page
    onClickBackBtn = () => {
      this.props.history.replace(Routes.UserHomePage)
    }

  //get user Data in component did mount
  getUserData = () => {
    const { Edit_Data } = this.props.BlogCatagory
    this.setState({ Data: Edit_Data })
  }

  //on Change handler
  onChangeHandler = (e) => {
    const { Data } = this.state
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }


  componentDidMount() {
    this.getUserData()
  }

  //edit data og blog catagory  
  onClickEditBlogBtn = async (e) => {
    const { Edit_Data } = this.props.BlogCatagory
    const { catagory_name } = this.state.Data

    e.preventDefault();

    var newData = {
      blog_catagory_id: Edit_Data.blog_catagory_id,
      catagory_name: catagory_name
    }

    if (newData.catagory_name === '') {
      alert("title can not be a empty")
    }
    else {
      const initialData = await httpClient.blogCatagoryUpdateBlog(newData);
      this.props.history.replace("/user-dashboard/Blog-catagory")
    }
  }

  render() {
    const { catagory_name } = this.state.Data

    return (
      <div className='create-BLog-inner-wrapper'>

        {/* <div className='create-blog-catagory-sub-nagition-form'>
          <div className='create-blog-catagory-sub-nagition-form-inner'>
            <div className='add-blog-catagory-back-icon' >
              <MdKeyboardBackspace onClick={this.onClickBackBtn} />
            </div>
          </div>
        </div> */}

        <div className='create-new-blog-wrapper-main'>
          <div className='create-new-blog-wrapper'>
            <div className='create-new-blog' >
              Edit Blog Catagory
            </div>
            <div className='add-new-catagory-btn-extra'></div>
          </div>
        </div>

        <div className='create-BLog-inner-wrapper1'>
          <div className='create-BLog-inner-wrapper2-main'>
            <div className='createBlog-title-main-wrapper'>
              <label className='createBlog-title blog-catagory-main'>Enter Blog Catagory: </label>
              <textarea
                name="catagory_name"
                onChange={this.onChangeHandler}
                value={catagory_name}
                className='createBlog-title-text-area'
              />
            </div>

            <div className='create-blog-description-main-wrapper'>
              <div className='create-blog-send-description'>
                <EditBlogBtn
                  onClickEditBtn={(e) => this.onClickEditBlogBtn(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    BlogCatagory: state.BlogCatagoryReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogCatagoryData1: (payload) => dispatch(getBlogCatagoryData(payload)),
    // editBlogCatagoryData1: (payload) => dispatch(editBlogCatagoryData(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(EditBlogCatagory1);

function EditBlogCatagory(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default EditBlogCatagory;

