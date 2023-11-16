import React, { Component } from 'react'

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"
import {
    getBlogDataPerticularId,
    getUserBlogData
} from "../../reduxStore/Actions/FirstPageAction"

// api call
import UserService from '../../services/userService'

//user Dp
import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"

import moment from 'moment';


class FirstPageUserInner1 extends Component {

    onClickViewPerticularBlog = (blog) => {
        this.props.getBlogDataPerticularId1({ blog_data: blog })
        this.props.history.replace('/view-blog-data')
    }

    onClickUserProfile = (blog) => {
        localStorage.setItem('user_id', blog.user_id);
        this.props.getUserBlogData1({ get_user_blog_data: blog })
        this.props.history.replace('/user-profile-blog')
    }


    render() {
        const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
        const { blog } = this.props

        console.log("blog" ,blog);
        const Data = blog.description.match(validEmailRegex)[1]
        return (
            <>
                <div className='first-page-BLog-list-main-wrapper-desc'>
                    <div className='first-page-BLog-list-main-wrapper-desc-inner'>
                        <div className='first-page-user-name-main-wrapper'
                            onClick={() => this.onClickUserProfile(blog)}>
                            <div className='first-page-user-dp-design'>
                                <img src={buddyboss_logo} alt="avatar" className="cover" />
                            </div>
                            <div className='first-page-user-name-main'>
                                {blog.name}
                            </div>
                            <div className='one-time one-time1'>
                                {/* {blog.updated_at} */}
                                {moment(blog.updated_at).format('D MMM YYYY') }
                            </div>
                        </div>
                        <div className='first-page-BLog-list-main-wrapper-desc-inner1'
                            onClick={() => this.onClickViewPerticularBlog(blog)}>
                            <div className='first-page-BLog-list-main-wrapper-desc-left'>
                                <div className='first-page-BLog-list-main-wrapper-img-wrapper'>
                                    <img src={`${blog.thumbNail_img}`} className="cover2" />
                                </div>
                            </div>
                            <div className='first-page-BLog-list-main-wrapper-desc-right'>
                                <div className='first-page-BLog-list-main-wrapper-desc-right-title'>
                                    {blog.title}
                                </div>

                                <div className='first-page-BLog-list-main-wrapper-desc-right-description'>
                                    <div className='first-page-BLog-list-main-wrapper-desc-right-description-data'>
                                        {Data.slice(0, 100)}...
                                    </div>
                                </div>
                                <div className='first-page-BLog-list-main-wrapper-desc-right-inner'>
                                    <div className='first-page-BLog-list-main-wrapper-desc-right-blog-catagory'>
                                        {blog.catagory_name}
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
        getBlogDataPerticularId1: (payload) => dispatch(getBlogDataPerticularId(payload)),
        getUserBlogData1: (payload) => dispatch(getUserBlogData(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(FirstPageUserInner1);

function FirstPageUserInner(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default FirstPageUserInner;

