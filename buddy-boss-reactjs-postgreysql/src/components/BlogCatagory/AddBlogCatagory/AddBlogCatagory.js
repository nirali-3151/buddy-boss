import React, { Component } from 'react'
import SendDesc from '../../BlogManagement/CreateBlog/SendDesc'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import UserService from "../../../services/userService"

import { MdKeyboardBackspace } from "react-icons/md"
import Routes from '../../../Routes/Routes';

class AddBlogCatagory1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: {
        title: "",
      }
    }
  }

  //handle value of input feild
  onChangeHandler = (e) => {
    const { Data } = this.state
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }

  //on click publish button
  onClickPublishBtn = async () => {
    const { title } = this.state.Data
    const Token = localStorage.getItem('Token');


    var newData = {
      catagory_name: title,
    }

    if (newData.catagory_name === '') {
      alert(" title can not be a empty")
    }
    else {
      const initialData = await UserService.blogCatagoryCreateBlogList(Token , newData);
      this.props.history.replace(Routes.UserHomePage)
    }
  }

  //back to the yuser page
  onClickBackBtn = () => {
    this.props.history.replace(Routes.UserHomePage)
  }


  render() {
    const { title } = this.state.Data

    return (
      <div className='create-BLog-inner-wrapper'>

        <div className='create-new-blog-wrapper-main'>
          <div className='create-new-blog-wrapper'>
            <div className='create-new-blog' >
              Add New Blog Catagory
            </div>
            <div className='add-new-catagory-btn-extra'></div>
          </div>
        </div>

        <div className='create-BLog-inner-wrapper1'>
          
          <div className='create-BLog-inner-wrapper2-main'>
            <div className='createBlog-title-main-wrapper'>
              <label className='createBlog-title blog-catagory-main'>Enter Blog Catagory: </label>
              <textarea
                name="title"
                onChange={this.onChangeHandler}
                value={title}
                className='createBlog-title-text-area'
              />
            </div>

            <div className='create-blog-description-main-wrapper'>
              <div className='create-blog-send-description'>
                <SendDesc
                  onClickPublishBtn={() => this.onClickPublishBtn()}
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
    // BlogCatagory: state.BlogCatagoryReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getBlogCatagoryData1: (payload) => dispatch(getBlogCatagoryData(payload)),
    // editBlogCatagoryData1: (payload) => dispatch(editBlogCatagoryData(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddBlogCatagory1);

function AddBlogCatagory(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default AddBlogCatagory;
