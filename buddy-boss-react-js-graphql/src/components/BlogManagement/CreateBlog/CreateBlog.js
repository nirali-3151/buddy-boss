import React, { Component } from 'react'
import FontFormat from './FontFormat'
import SendDesc from './SendDesc'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import httpClient from '../../../services/httpClient';

import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

import { MdDelete } from "react-icons/md"

// import "../../../Design/ViewBlogList.css"

import ImageBtn from './ImageBtn';

import {
  storeImage,
} from "../../../firebase_action/thumbNailImg_store"

import MyUploadAdapter from '../../ckeditor/MyUploadAdapter';


class CreateBlog1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: {
        title: "",
        desc: "",
        blog_catagory_id: "",
        radio_btn_select: "",
        thumb_nail_image: "",
        thumb_nail_image_name: "",
        created_at: new Date()
      },
      blog_catagory_dd_flag: false,
      previewImgFlag: false,
      catagory_data_dd: [],
      blogData: ''
    }
  }

  //handle value of input feild
  onChangeHandler = (e) => {
    const { Data } = this.state
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }

  //change value to sigle quate into double quate of title
  changeValueOfSingleQuateTitle = () => {
    const { title } = this.state.Data
    const replaced1 = title.replaceAll("'", "''");
    const replaced = replaced1.replaceAll("\"", "\\\"");

    this.setState({ title_replaced: replaced })
  }

  //change value to sigle quate into double quate of description
  changeValueOfSingleQuateDescription = () => {
    const { desc } = this.state.Data
    const replaced1 = desc.replaceAll("'", "''");
    const replaced = replaced1.replaceAll("\"", "\\\"");
    this.setState({ description_replaced: replaced })
  }

  componentDidUpdate(prevProps, prevState) {
    const { title, desc } = this.state.Data

    const isDiff = prevState.Data.radio_btn_select !== this.state.Data.radio_btn_select && this.state.Data.radio_btn_select === "Main"
    if (isDiff) {
      this.getDataOfMainBlog()
    }

    const isDiff1 = prevState.Data.title !== title;
    if (isDiff1) {
      this.changeValueOfSingleQuateTitle()
    }

    const isDiff2 = prevState.Data.desc !== desc;
    if (isDiff2) {
      this.changeValueOfSingleQuateDescription()
    }
  }

  // check weather data contains main blog or not
  getDataOfMainBlog = async () => {
    const Token = localStorage.getItem('Token');

    const initialData = await httpClient.getMainBlogOfUser(Token);
    this.setState({ blogData: initialData.searchMainBlogTable.length })
  }

  //onChange Event in CK editor
  onChangeInEditor = (event, editor) => {
    const { Data } = this.state
    const data = editor.getData()
    this.setState({ Data: { ...Data, desc: data } })
  }

  //on click publish button
  onClickPublishBtn = async () => {
    const { thumb_nail_image } = this.state.Data
    const { title } = this.state.Data
    const { desc } = this.state.Data
    const { blog_catagory_id,
      radio_btn_select,
      created_at
    } = this.state.Data

    const { title_replaced,
      description_replaced
    } = this.state

    const { blogData } = this.state
    const token = localStorage.getItem('Token');

    if (blogData > 0) {
      alert("are you sure you want to make it As a main Blog")

      const initialData = await httpClient.UpdateMainBlogOfUser(token);
    }

    const data = await storeImage(thumb_nail_image)

    if (thumb_nail_image === "" || title === "" || desc === "" || blog_catagory_id === "" || radio_btn_select === "") {
      alert("every feold is important")
    }
    else {
      const newData = {
        file: data,
        title: title_replaced,
        description: description_replaced,
        blog: radio_btn_select,
        blog_catagory_id: blog_catagory_id,
        created_at: created_at
      }

      this.props.history.replace("/user-dashboard/blog-management")
      const initialData = await httpClient.createNewBlog(token, newData);
    }
  }


  //get Catagory Data in Drop Down
  getCatagoryDataDropDown = async () => {
    const initialData = await httpClient.blogCatagoryDropDown();
    this.setState({ catagory_data_dd: initialData.blogCatagoryQueryDD })
  }

  //handle change radio btn
  handleChange = event => {
    const { Data } = this.state
    const { target: { value } } = event;
    this.setState({
      Data: { ...Data, radio_btn_select: event.target.value }
    })
  };

  componentDidMount() {
    this.getCatagoryDataDropDown()
  }

  //add thumbnail image 
  onClickAddThumbnailImg = (e) => {
    const { Data } = this.state
    this.setState({ Data: { ...Data, thumb_nail_image: e.target.files[0], thumb_nail_image_name: e.target.files[0].name } })
  }

  onClickPreviewImg = () => {
    this.setState(prevState => ({
      previewImgFlag: !prevState.previewImgFlag
    }));
  }

  //set image empty
  onClickDeleteBtn = () => {
    const { Data } = this.state
    this.onClickPreviewImg()
    this.setState({ Data: { ...Data, thumb_nail_image: "" } })
  }

  render() {

    const { title } = this.state.Data
    const { desc } = this.state.Data
    const { blog_catagory_id,
      thumb_nail_image,
    } = this.state.Data
    const { catagory_data_dd } = this.state

    const { previewImgFlag } = this.state
    console.log("this.state.data" , desc);

    console.log("this.state.data.description" ,this.state.description_replaced );
    return (
      <>
        <div className='create-BLog-inner-wrapper'>
          {previewImgFlag   ? <>
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
                  Create New Blog
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
                      {thumb_nail_image === "" ?
                        <>
                          <label htmlFor="thumb_nail_image">
                            <ImageBtn
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
                        </>
                        :
                        <>
                          {thumb_nail_image && (
                            <div className='preview_img' onClick={this.onClickPreviewImg}>
                              <img
                                src={URL.createObjectURL(thumb_nail_image)}
                                alt="Thumb"
                                className='cover '
                                style={{ borderRadius: "8px" }}
                              />
                              <div className='Create-blog-Preview-text-style'>Preview</div>
                              <MdDelete
                                onClick={this.onClickDeleteBtn}
                                className='Create-blog-Preview-edit-btn-style'
                              />

                            </div>
                          )}
                        </>}
                    </div>
                  </div>


                  <div className='createBlog-blog-catagory-wrapper'>
                    <label className='createBlog-title'>Blog </label>
                    <div className='create-blog-radio-btn'
                    >
                      <div className='create-blog-radio-btn-main'><input type="radio" value="Main" name="blog" onChange={this.handleChange} /> Main</div>
                      <div className='create-blog-radio-btn-featured'><input type="radio" value="Featured" name="blog" onChange={this.handleChange} /> Featured</div>
                    </div>
                  </div>

                  <div className='createBlog-blogCatagory-main-wrapper'>
                    <label className='createBlog-title blog-catagory-main'>Select Blog Catagory : </label>
                    <Select
                      style={{ height: "40px", borderRadius: "8px", fontSize: "16px" }}
                      className="createBlog-DropDown"
                      id="outlined-adornment-lName"
                      name="blog_catagory_id"
                      value={blog_catagory_id}
                      onChange={this.onChangeHandler}
                    >
                      {/* <div className='menu-item-wrapper'> */}
                        {catagory_data_dd.map((item) =>
                          <MenuItem
                            style={{ fontSize: "10px" }}
                            key={item.blog_catagory_id} value={item.blog_catagory_id} >
                            {item.catagory_name}
                          </MenuItem>
                        )}
                      {/* </div> */}
                    </Select>
                  </div>

                  <div className='createBlog-AddDescription' style={{ paddingTop: "15px" }}>Add Description :</div>
                  <div className='create-blog-description-main-wrapper'>
                    <div className="ck-content">
                      <CKEditor
                        className="ck-content"
                        editor={ClassicEditor}

                        onChange={(event, editor) => this.onChangeInEditor(event, editor)}

                        onReady={editor => {
                          editor.plugins.get("FileRepository").createUploadAdapter = loader => {
                            return new MyUploadAdapter(loader);
                          };
                        }}

                        onBlur={(event, editor) => {
                        }}
                        onFocus={(event, editor) => {
                        }}


                      />

                      {/* <CKEditor
                        className="ck-content"
                        editor={ClassicEditor}

                        onChange={(event, editor) => this.onChangeInEditor(event, editor)}

                        config={
                          {
                            ckfinder: {
                              uploadUrl: `/upload`,
                              withCredentials: true,
                              headers: {
                                'X-CSRF-TOKEN': 'CSFR-Token',
                                Authorization: 'Bearer <JSON Web Token>'
                              }
                            }
                          }

                        }
                      /> */}
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
    // getBlogManagementData1: (payload) => dispatch(getBlogManagementData(payload)),
    // getBlogManagementDataWithId1: (payload) => dispatch(getBlogManagementDataWithId(payload)),
    // getAuthId1: (payload) => dispatch(getAuthId(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(CreateBlog1);

function CreateBlog(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default CreateBlog;

