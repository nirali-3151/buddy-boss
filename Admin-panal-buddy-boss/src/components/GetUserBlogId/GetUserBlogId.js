import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import UserService from '../../services/userService'

import { ViewAvailableUsers, getBlogDataPerticularId } from "../../reduxStore/Actions/UserListAction"

import GetUserBlogIdInner from "./GetUserBlogIdInner"

import { BsFillChatDotsFill } from "react-icons/bs"
import Routes from '../../Routes/Routes';

import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';

class GetUserBlogId1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagory_id: 1,
            blog_status_flag: "all",
            
        }
    }

    //get perticular user data
    getPerticularUserData = async () => {
        const auth_id = localStorage.getItem("auth_id")
        const newData = {
            auth_id: auth_id
        }
        const initialData = await UserService.GetPerticularUserBlogList(newData)
        this.props.getBlogDataPerticularId1({ blog_data: initialData.data })
    }

    componentDidMount() {
        this.getPerticularUserData()
    }

    onChangeHandler = (e) => {
        this.setState({ blog_status_flag: e.target.value });
    }

    //on Click of chat button
    chatWithAdmin = () => {
        const { blog_data } = this.props.UserList
        this.props.history.push(Routes.ChatComponent)
    }

    render() {
        const { blog_data } = this.props.UserList
        const { blog_status_flag } = this.state
        return (
            <>

                <div className='create-BLog-inner-wrapper'>
                    <div className='create-new-blog-wrapper-main'>
                        <div className='create-new-blog-wrapper view-blog-list-admin'>
                            <div className='create-new-blog' >
                                View Blog
                            </div>
                            <div>
                                <Select
                                    style={{ height: "40px", borderRadius: "8px", fontSize: "16px" }}
                                    className="ViewBlogList-DropDown"
                                    id="outlined-adornment-lName"
                                    name="blog_catagory_id"
                                    value={blog_status_flag}
                                    onChange={this.onChangeHandler}
                                >
                                    <MenuItem value={true}>Enabled</MenuItem>
                                    <MenuItem value={false}>Disabled</MenuItem>
                                    <MenuItem value={"all"}>All Blog</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className='create-BLog-inner-wrapper1'>
                        <div className='view-BLog-list-wrapper2-main-wrap'>
                            <div className='view-BLog-list-wrapper2-main'>
                                {
                                    blog_status_flag !== "all"
                                        ?
                                        blog_status_flag === true ?
                                            blog_data.filter((blog, i) => {
                                                return blog.blog_status_flag === true
                                            })
                                                .map((blog, i) => (
                                                    <GetUserBlogIdInner
                                                        blog={blog}
                                                        onClickToggleBtn={() => this.onClickToggleBtn(blog)}
                                                        viewBlogOnClickPerticularBlog={() => this.viewBlogOnClickPerticularBlog(blog)}
                                                        getViewBlogManagementData={() => this.getViewBlogManagementData()}
                                                        blog_status_flag={blog_status_flag}
                                                    />
                                                ))
                                            :
                                            blog_data.filter((blog, i) => {
                                                return blog.blog_status_flag === false
                                            })
                                                .map((blog, i) => (
                                                    <GetUserBlogIdInner
                                                        key={i}
                                                        blog={blog}
                                                        onClickToggleBtn={() => this.onClickToggleBtn(blog)}
                                                        viewBlogOnClickPerticularBlog={() => this.viewBlogOnClickPerticularBlog(blog)}
                                                        getViewBlogManagementData={() => this.getViewBlogManagementData()}
                                                        blog_status_flag={blog_status_flag}
                                                    />
                                                ))
                                        :
                                        blog_data.length === 0 ?
                                            <p className='create-first-blog-if-not'>This User Don't have any blog</p>
                                            :
                                            blog_data.map((blog, i) => (
                                                <GetUserBlogIdInner
                                                    key={i}
                                                    blog={blog}
                                                    onClickToggleBtn={() => this.onClickToggleBtn(blog)}
                                                    viewBlogOnClickPerticularBlog={() => this.viewBlogOnClickPerticularBlog(blog)}
                                                    getViewBlogManagementData={() => this.getViewBlogManagementData()}
                                                    blog_status_flag={blog_status_flag}
                                                />
                                            ))
                                }
                            </div>

                            <div className='view-BLog-chat-btn' onClick={() => this.chatWithAdmin()}>
                                <BsFillChatDotsFill style={{ color: "white", margin: "8px", fontSize: "24px" }} />
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
        UserList: state.UserListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ViewAvailableUsers1: (payload) => dispatch(ViewAvailableUsers(payload)),
        getBlogDataPerticularId1: (payload) => dispatch(getBlogDataPerticularId(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(GetUserBlogId1);

function GetUserBlogId(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default GetUserBlogId;

