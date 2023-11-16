import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import "../../../Design/TableDesign.css"
import "../../../Design/ViewBlogList.css"

import UserService from '../../../services/userService'

import {
    getBlogManagementData,
    getBlogManagementDataWithId,
    getAuthId
} from '../../../reduxStore/Actions/BlogManagement'

import AddBlogBtn from './AddBlogBtn'

import ViewBlogListInner from './ViewBlogListInner';
import Routes from '../../../Routes/Routes';

import { BsFillChatDotsFill } from "react-icons/bs"

class ViewBlogList1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    //navigate to  create new blog component
    onClickAddNewBlogBtn = () => {
        this.props.history.push(Routes.CreateBlog)
    }


    //get all blog_management  Data
    getViewBlogManagementData = async () => {
        const Token = localStorage.getItem('Token');
        const initialData = await UserService.getUserDataList(Token);
        this.props.getBlogManagementData1({ blog_manage_Data: initialData.data })
    }

    componentDidMount() {
        this.getViewBlogManagementData()
    }

    //view whole blog onclick perticular blog
    viewBlogOnClickPerticularBlog = (blog) => {
        this.props.getBlogManagementDataWithId1({ blog_manage_Data_id: blog })
        this.props.history.push(Routes.ViewBlogWithId)
    }

    //on click chat with admin btn
    chatWithAdmin = () => {
        this.props.history.push(Routes.ChatComponent)
    }

    render() {
        const { blog_manage_Data } = this.props.BlogManagement
        return (
            <>
                <div className='create-BLog-inner-wrapper'>
                    <div className='create-new-blog-wrapper-main'>
                        <div className='create-new-blog-wrapper'>
                            <div className='create-new-blog' >
                                View Blog
                            </div>
                            <div className='create-blog-add-new-Data'>
                                <AddBlogBtn
                                    onClickAddNewBlogBtn={this.onClickAddNewBlogBtn}
                                />
                            </div>
                        </div>
                    </div>



                    <div className='create-BLog-inner-wrapper1'>
                        <div className='view-BLog-list-wrapper2-main-wrap'>
                            {blog_manage_Data.length === 0 ?
                                <p className='create-first-blog-if-not'>Create your first blog</p>
                                :

                                <div className='view-BLog-list-wrapper2-main'>
                                    {blog_manage_Data.map((blog, i) => (
                                        <ViewBlogListInner
                                            blog={blog}
                                            viewBlogOnClickPerticularBlog={() => this.viewBlogOnClickPerticularBlog(blog)}
                                            getViewBlogManagementData={() => this.getViewBlogManagementData()}
                                        />
                                    ))}
                                </div>
                            }
                        </div>
                        <div className='view-BLog-chat-btn' onClick={() => this.chatWithAdmin()}>
                            <BsFillChatDotsFill style={{ color: "white", margin: "8px", fontSize: "24px" }} />
                        </div>
                    </div>
                </div>
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
        getBlogManagementData1: (payload) => dispatch(getBlogManagementData(payload)),
        getBlogManagementDataWithId1: (payload) => dispatch(getBlogManagementDataWithId(payload)),
        getAuthId1: (payload) => dispatch(getAuthId(payload)),
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogList1);

function ViewBlogList(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogList;

