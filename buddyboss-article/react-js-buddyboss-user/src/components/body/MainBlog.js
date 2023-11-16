import React, { Component } from 'react'
import MainBlog_img from "../../assets/Images/main_blog_img.jpg"
import Img from "../../assets/Images/buddyboss.logo.png";

import moment from 'moment';


class MainBlog extends Component {

  render() {
    const { blog } = this.props

    const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);

    return (
      <>
        <div className='main-blog-img'>
          <img src={blog.thumbNail_img} alt="avatar" className="cover" style={{ borderRadius: "8px" }}/>
        </div>
        <div className='main-blog-img1'></div>
        <div className='wrapper-for-title-main-blog'>
          <div className='blog-catagory-main-blog'>
            {blog.catagory_name}
          </div>
          <div className='blog-section-one-title'>
            {blog.title}
          </div>
          <div className='blog-section-one-content'>
            {blog.description.match(validEmailRegex)[1]}
          </div>
          <div className='blog-section-one-author-name'>
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
        </div>
      </>
    )
  }
}

export default MainBlog
