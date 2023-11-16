import React, { Component } from 'react'

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"
import {
    getAllUserBLog,
    getBlogDataPerticularId,
    getMainUserBlogDataPerticularId
} from "../../reduxStore/Actions/FirstPageAction"


//api call
import UserService from '../../services/userService';

import '../../Design/body.css'
import MainBlog from './MainBlog'
import FeaturedBlog from './FeaturedBlog'
import OtherBlog from './OtherBlog'
import NavBar from '../NavBar'
import ViewBlogMainWithId from '../ViewBlogMainWithId/ViewBlogMainWithId';
import Routes from '../../Routes/Routes';

class Body1 extends Component {

    getUsersEveryBlog = async () => {
        const { get_user_blog_data } = this.props.FirstPage
        const data = localStorage.getItem('user_id');
        const newData = {
            auth_id: data
        }
        const initialData = await UserService.userAllBlogWithIdList(newData)
        this.props.getAllUserBLog1({ get_blog_user_id: initialData })
    }

    getUserMainBlog = async () => {
        const data = localStorage.getItem('user_id');
        const newData = {
            auth_id: data
        }
        const initialData = await UserService.userMainBlogWithIdList(newData)
        this.props.getMainUserBlogDataPerticularId1({ Main_blog_data: initialData })
    }

    onClickViewData = (blog) => {
        this.props.getBlogDataPerticularId1({ blog_data: blog })
        this.props.history.push(Routes.ViewBlogMainWithId1)
    }

    componentDidMount() {
        this.getUsersEveryBlog()
        this.getUserMainBlog()
    }

    render() {
        const { get_blog_user_id,
            Main_blog_data } = this.props.FirstPage
            
        return (
            <>
                <div className='first-page-user-main-wrapper-includes-navbar'>

                    <NavBar />
                    <div className='first-page-user-main-wrapper'>

                        {/* <Route path='/user-profile-blog' component={Body} /> */}
                        {/* <div className='body-main-wrap'> */}
                            <div className='body-container'>
                                <div className="blog_section_one">
                                    {Main_blog_data.map((blog, i) => (
                                        <div className='blog_section_one_left'
                                            onClick={() => this.onClickViewData(blog)}
                                        >
                                            <MainBlog
                                                blog={blog}
                                            />
                                        </div>
                                    ))}

                                    <div className='blog_section_one_right'>
                                        {/* <FeaturedBlog /> */}
                                    </div>
                                </div>

                                <div className='blog_section_two'>
                                    {get_blog_user_id.map((blog, i) => (
                                        <OtherBlog
                                            blog={blog}
                                        />

                                    ))}
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
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
        getAllUserBLog1: (payload) => dispatch(getAllUserBLog(payload)),
        getBlogDataPerticularId1: (payload) => dispatch(getBlogDataPerticularId(payload)),
        getMainUserBlogDataPerticularId1: (payload) => dispatch(getMainUserBlogDataPerticularId(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(Body1);

function Body(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default Body;

