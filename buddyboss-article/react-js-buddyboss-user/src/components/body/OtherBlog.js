import React, { Component } from 'react'
import otherImg from '../../assets/Images/featured_blog_2.jpg'
import Img from "../../assets/Images/buddyboss.logo.png";
import { FaLongArrowAltRight } from "react-icons/fa"

import {
  getBlogDataPerticularId,
} from "../../reduxStore/Actions/FirstPageAction"

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"

import moment from 'moment';


class OtherBlog1 extends Component {


  onClickViewData = (blog) => {
    console.log("----------------onClickViewData------------------", blog);
    this.props.getBlogDataPerticularId1({ blog_data: blog })
    this.props.history.replace('/user-profile-blog/user-profile-blog-id')
  }

  render() {
    const { blog } = this.props
    const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);

    const Data = blog.description.match(validEmailRegex)[1]

    console.log("data slice", Data.slice[0, 50]);
    return (
      <div className='other-blog-section'>
        <div className='other_blog_section_header'
          onClick={() => this.onClickViewData(blog)}>
          <div className='other_blog_section_title'>
            {blog.catagory_name}
          </div>

          <div className='other_blog_section_inner'>
            <div className='other_blog_section_image'>
              <img src={blog.thumbNail_img} alt="avatar" className="cover" />
            </div>
            <div className='other_blog_section_header_title'>
              {blog.title}
            </div>
          </div>

          <div className='other_blog_section_header_content'>
            {Data.slice(0, 80)}...
          </div>

          <div className='blog-section-one-author-name1'>
            <div className='one-avatar'>
              <img src={Img} alt="avatar" className="cover" />
            </div>
            <div className='one-author-name'>
              {blog.name}
            </div>
            <div className="one-time">
              {moment(blog.updated_at).format('D MMM YYYY')}
            </div>
          </div>

          {/* <div className='other-section-another-header'>
            Getting Started with the BuddyBoss Platform and Theme
          </div> */}

          <div className='other-blog-see-all'>
            <div className='other-blog-see-all-text'>
              See All
            </div>
            <FaLongArrowAltRight style={{
              fontSize: "19px",
              margin: "10px 0px 0px 8px"
            }} />
          </div>
        </div>

      </div >
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
    getBlogDataPerticularId1: (payload) => dispatch(getBlogDataPerticularId(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(OtherBlog1);

function OtherBlog(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default OtherBlog;

