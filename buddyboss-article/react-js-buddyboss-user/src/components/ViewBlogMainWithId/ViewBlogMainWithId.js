import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import NavBar from "../NavBar"

class ViewBlogMainWithId1 extends Component {

  createMarkup = () => {
    return { __html: this.props.FirstPage.blog_data.description };
  }

  render() {
    const { blog_data } = this.props.FirstPage
    console.log("blog_data", blog_data);
    return (
      <>
        <div className='first-page-user-main-wrapper-includes-navbar'>
          <NavBar />
          <div className='first-page-user-main-wrapper'>
            <div className='view-blog-main-with-id-wrapper-main'>
              <div className='view-blog-main-with-id-wrapper'
                style={{ backgroundColor: "#fff" }}
              >

                <div className='view-blog-with-id-wrapper-main-inner'>
                  <div className='view-blog-with-id-wrapper-catagory-name'>
                    {blog_data.catagory_name}
                  </div>

                  <div className='view-blog-with-id-wrapper-blog-title view-blog-with-id-wrapper-blog-title1'>
                    <div className='view-blog-with-id-wrapper-blog-title-inner'>
                      {blog_data.title}
                    </div>
                  </div>
                </div>

                <div className='view-blog-with-id-wrapper-main-image view-blog-with-id-wrapper-main-image1'>
                  <img src={`${blog_data.thumbNail_img}`} className="cover2" style={{ borderRadius: "0px" }} />
                </div>
              </div>
              <div className='view-blog-main-with-id-wrapper-ckEditor-data-main-wrapper'>
                <div className='view-blog-main-with-id-wrapper-ckEditor-data'>
                  <div dangerouslySetInnerHTML={this.createMarkup()} className='view-blog-main-with-id-wrapper-ckEditor-editor'>
                  </div>
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
    FirstPage: state.FirstPageReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // EditBlogManagementData1: (payload) => dispatch(EditBlogManagementData(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogMainWithId1);

function ViewBlogMainWithId(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default ViewBlogMainWithId;
