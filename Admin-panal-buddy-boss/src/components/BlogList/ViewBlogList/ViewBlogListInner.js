import React, { Component } from 'react'

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"
import {
    getUserBlogData
} from "../../../reduxStore/Actions/FirstPageAction"

import { getOneBlogId } from "../../../reduxStore/Actions/UserListAction"

// api call
import UserService from '../../../services/userService'

//user Dp
import buddyboss_logo from "../../../assets/Images/buddyboss.logo.png"

import moment from 'moment';

import Routes from "../../../Routes/Routes"

import { Toggle } from '../../GetUserBlogId/ToggleDesign';

class ViewBlogListInner1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false,
        }
    }


    onClickViewPerticularBlog = (blog) => {
        this.props.getOneBlogId1({ blog_data_id: blog })
        this.props.history.push(Routes.ViewBlogMainWithId)
    }

    onClickUserProfile = (blog) => {
        localStorage.setItem('user_id', blog.user_id);
        this.props.getUserBlogData1({ get_user_blog_data: blog })
        this.props.history.push(Routes.Body)
    }

    componentDidMount() {
        const { blog } = this.props
        this.setState({ on: blog.blog_status_flag })
    }

    onClickToggleBtn = async (blog) => {
        this.setState(prevState => ({
            on: !prevState.on
        }));
        const newData = {
            blog_manage_id: blog.blog_manage_id,
        }
        const initialData = await UserService.updateBlogStatusList(newData)
    }

    render() {
        const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
        const { blog } = this.props
        const { on } = this.state
        const Data = blog.description.match(validEmailRegex)
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
                                {moment(blog.updated_at).format('D MMM YYYY')}
                            </div>
                            <Toggle
                                on={on}
                                onClick={() => this.onClickToggleBtn(blog)}
                            />
                        </div>
                        <div className='first-page-BLog-list-main-wrapper-desc-inner1'
                            onClick={() => this.onClickViewPerticularBlog(blog)}>
                            <div className='first-page-BLog-list-main-wrapper-desc-left'>
                                <div className='first-page-BLog-list-main-wrapper-img-wrapper'>
                                    <img src={`${blog.thumbnail_img}`} className="cover2" />
                                </div>
                            </div>
                            <div className='first-page-BLog-list-main-wrapper-desc-right'>
                                <div className='first-page-BLog-list-main-wrapper-desc-right-title'>
                                    {blog.title}
                                </div>

                                <div className='first-page-BLog-list-main-wrapper-desc-right-description'>
                                    <div className='first-page-BLog-list-main-wrapper-desc-right-description-data'>
                                        {!Data ? "" : Data[1].slice(0, 130)}...
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
        UserList: state.UserListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOneBlogId1: (payload) => dispatch(getOneBlogId(payload)),
        getUserBlogData1: (payload) => dispatch(getUserBlogData(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogListInner1);

function ViewBlogListInner(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogListInner;

