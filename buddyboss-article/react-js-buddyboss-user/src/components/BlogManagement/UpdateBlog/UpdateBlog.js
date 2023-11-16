import React, { Component, useRef } from 'react'

import { useHistory } from "react-router-dom";

import { connect } from "react-redux"

import SendDesc from '../CreateBlog/SendDesc';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import {
  MdModeEdit
} from 'react-icons/md'

import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

import UserService from '../../../services/userService';


import ImageBtn from '../CreateBlog/ImageBtn';

class UpdateBlog1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: {
        title: "",
        description: "",
        catagory_name: "",
        thumb_nail_image: "",
        updated_at: new Date()
      },
      blog_catagory_dd_flag: false,
      previewImgFlag: false,
      catagory_data_dd: [],
    }
  }

  //handle value of input feild
  onChangeHandler = (e) => {
    const { Data } = this.state
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }

  //onChange Event in CK editor
  onChangeInEditor = (event, editor) => {
    console.log("editor", editor);
    const { Data } = this.state
    const data = editor.getData()
    this.setState({ Data: { ...Data, description: data } })
  }

  //handle change radio btn
  handleChange = event => {
    const { Data } = this.state
    const { target: { value } } = event;
    this.setState({
      Data: { ...Data, radio_btn_select: event.target.value }
    })
  };

  //get initial data of form
  getDataOfUser = () => {
    const { edit_blog_manage_data } = this.props.BlogManagement
    this.setState({ Data: edit_blog_manage_data })
  }

  //get Catagory Data in Drop Down
  getCatagoryDataDropDown = async () => {
    const initialData = await UserService.blogCatagoryDropDownList();
    this.setState({ catagory_data_dd: initialData.data })
  }

  componentDidMount() {
    this.getDataOfUser()
    this.getCatagoryDataDropDown()
  }

  componentDidUpdate(prevProps, prevState) {
  }

  setBlogCatagoryDropDownFlag = () => {
    this.setState(prevState => ({
      blog_catagory_dd_flag: !prevState.blog_catagory_dd_flag
    }));
  }

  //add thumbnail image 
  onClickAddThumbnailImg = (e) => {
    const { Data } = this.state
    this.setState({ Data: { ...Data, thumb_nail_image: e.target.files[0] } })
  }

  onClickPreviewImg = () => {
    this.setState(prevState => ({
      previewImgFlag: !prevState.previewImgFlag
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    const isDiff = prevState.Data.radio_btn_select !== this.state.Data.radio_btn_select && this.state.Data.radio_btn_select === "Main"
    if (isDiff) {
      this.getDataOfMainBlog()
    }
  }

  // check weather data contains main blog or not
  getDataOfMainBlog = async () => {
    const authId = localStorage.getItem('auth_ID');

    const newData = {
      id: authId
    }

    const initialData = await UserService.getMainBlogOfUserList(newData);

    console.log("initial DAta", initialData.data.length);
    this.setState({ blogData: initialData.data.length })
  }

  //update data in on click publish btn
  onClickPublishBtn = async () => {
    const { thumb_nail_image } = this.state.Data
    const { title } = this.state.Data
    const { description } = this.state.Data
    const { catagory_name,
      radio_btn_select,
    } = this.state.Data
    const { Data } = this.state

    const { blogData } = this.state

    const { authId } = this.props.BlogManagement

    const updated_at = new Date()


    if (blogData > 0) {
      alert("are you sure you want to make it As a main Blog")

      const newData = {
        id: authId,
        blog: "Featured"
      }

      console.log("newData is : ", newData);
      const initialData = await UserService.UpdateMainBlogOfUserList(newData);
      console.log("initialData", initialData);
    }

    if (thumb_nail_image === "" || title === "" || description === "" || catagory_name === "" || radio_btn_select === "") {
      alert("every feold is important")
    }
    else {
      let formData = new FormData()
      formData.append('file', thumb_nail_image)
      formData.append('title', title)
      formData.append('description', description)
      formData.append('blog', radio_btn_select)
      formData.append('blog_catagory_id', catagory_name)
      formData.append('blog_manage_id', Data.blog_manage_id)
      formData.append('updated_at', updated_at)

      const initialData = await UserService.blogManagementUpdateBlogList(formData);
      this.props.history.replace("/user-dashboard/blog-management")
    }
  }

  render() {
    const { title } = this.state.Data
    const { description } = this.state.Data
    const { catagory_name,
      radio_btn_select,
      thumb_nail_image,
    } = this.state.Data
    const { catagory_data_dd } = this.state

    const { blog_catagory_dd_flag,
      previewImgFlag } = this.state

    const { edit_blog_manage_data } = this.props.BlogManagement
    console.log("edit_blog_manage_data", this.state.Data);

    return (
      <>
        <div className='create-BLog-inner-wrapper'>

          {previewImgFlag && typeof (thumb_nail_image) === 'undefined' ? <>
            <div className='preview_img_whole_page' onClick={this.onClickPreviewImg}>
              <img src={`${edit_blog_manage_data.thumbNail_img}`} className=" preview_cover" />
            </div>
          </>
            : ""}

          {previewImgFlag ? <>
            {thumb_nail_image && (
              <div className='preview_img_whole_page' onClick={this.onClickPreviewImg}>
                <img
                  src={URL.createObjectURL(thumb_nail_image)}
                  alt="Thumb"
                  className='preview_cover'
                />
              </div>
            )}
          </>
            : ""}
          <>
            <div className='create-new-blog-wrapper-main'>
              <div className='create-new-blog-wrapper'>
                <div className='create-new-blog' >
                  Update Blog
                </div>
                <div className='add-new-catagory-btn-extra'></div>
              </div>
            </div>

            <div className='create-BLog-inner-wrapper1'>
              <div className='view-BLog-list-wrapper2-main-wrap '>
                <div className={previewImgFlag ? "view-BLog-list-wrapper2-main" : "view-BLog-list-wrapper2-main"}>
                  <div className='createBlog-title-main-wrapper'>
                    <label className='createBlog-title title-main'>Enter Title: </label>
                    <textarea
                      name="title"
                      onChange={this.onChangeHandler}
                      value={title}
                      className='createBlog-title-text-area'
                    />
                  </div>

                  <div className='createBlog-blogCatagory-main-wrapper'>
                    <label className='createBlog-title blog-catagory-main'>Add Thumbnail: </label>
                    <div className='create-blog-add-thumbnail-image-main-wrapper'>
                      <div className='preview_img'>
                        {typeof (thumb_nail_image) === 'undefined' ?
                          <img src={`${edit_blog_manage_data.thumbNail_img}`} className="cover" style={{ borderRadius: "8px" }} />
                          : ""}

                        {thumb_nail_image && (
                          <img
                            src={URL.createObjectURL(thumb_nail_image)}
                            alt="Thumb"
                            className='cover '
                            style={{ borderRadius: "8px" }}
                          />

                        )}

                        <div className='Create-blog-Preview-text-style'
                          onClick={this.onClickPreviewImg}
                        >
                          Preview
                        </div>

                        <label htmlFor="thumb_nail_image">
                          <MdModeEdit
                            className='Create-blog-Preview-edit-btn-style'
                          />
                        </label>

                        <input
                          onChange={(e) => this.onClickAddThumbnailImg(e)}
                          type="file"
                          name='thumb_nail_image'
                          id="thumb_nail_image"
                          accept="image/*"
                          style={{ display: "none" }}
                        />

                      </div>
                    </div>
                  </div>


                  <div className='createBlog-blog-catagory-wrapper'>
                    <label className='createBlog-title'>Blog </label>
                    <div className='create-blog-radio-btn'
                    >
                      <div className='create-blog-radio-btn-main'><input type="radio" value="Main" name="blog" onChange={this.handleChange}
                        checked={radio_btn_select === "Main"}
                      /> Main</div>
                      <div className='create-blog-radio-btn-featured'><input type="radio" value="Featured" name="blog" onChange={this.handleChange}
                        checked={radio_btn_select === "Featured"} />
                        Featured</div>
                    </div>
                  </div>

                  <div className='createBlog-blogCatagory-main-wrapper'>
                    <label className='createBlog-title blog-catagory-main'>Select Blog Catagory : </label>
                    <Select
                      style={{ height: "40px", borderRadius: "8px",fontSize: "16px" }}
                      className="createBlog-DropDown"
                      id="outlined-adornment-lName"
                      name="catagory_name"
                      value={catagory_name}
                      onChange={this.onChangeHandler}
                    >
                      {catagory_data_dd.map((item) =>
                        <MenuItem
                          style={{ fontSize: "10px" }}
                          key={item.blog_catagory_id} value={item.catagory_name} >
                          {item.catagory_name}
                        </MenuItem>
                      )}
                    </Select>
                    {/* <select
                      name='catagory_name'
                      value={catagory_name}
                      onChange={this.onChangeHandler}
                      className="createBlog-DropDown"
                    >
                      {
                        catagory_data_dd.map((user) => (
                          <option
                            className='create-blog-option-data'
                            key={user.blog_catagory_id} value={user.catagory_name}>
                            {user.catagory_name}
                          </option>
                        ))
                      }
                    </select> */}
                  </div>

                  <div className='createBlog-AddDescription' style={{ paddingTop: "15px" }}>Add Description :</div>
                  <div className='create-blog-description-main-wrapper'>
                    <div className="ck-content1234  ">
                      <CKEditor
                        ref={this.props.ck_content}
                        editor={ClassicEditor}
                        activeClass="editor"
                        data={edit_blog_manage_data.description}
                        onChange={(event, editor) => this.onChangeInEditor(event, editor)}
                        config={{
                          ckfinder: {
                            uploadUrl: '/upload',
                            withCredentials: true,
                            headers: {
                              'X-CSRF-TOKEN': 'CSFR-Token',
                              Authorization: 'Bearer <JSON Web Token>'
                            }
                          }
                        }

                        }
                      />
                    </div>

                    <div className='create-blog-send-description'>
                      <SendDesc
                        onClickPublishBtn={() => this.onClickPublishBtn()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

        </div>
        {/* </div> */}
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
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(UpdateBlog1);

function UpdateBlog(props) {
  const history = useHistory();
  const ck_content = useRef(null);
  return <Add {...props} history={history}
    ck_content={ck_content} />
}
export default UpdateBlog;

