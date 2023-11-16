import React, { Component } from 'react'

//redux
import { connect } from "react-redux"
import {
    getFirstPageAllBlogData,
    getFirstPageAllBlogDataNextPage,
    getTotalCountOfBlog
} from "../../../reduxStore/Actions/FirstPageAction"

//design
import '../../../Design/FirstPageUser.css'
import ViewBlogListInner from './ViewBlogListInner';

//api call
import UserService from '../../../services/userService';

//scrollBar
import InfinitScroll from 'react-infinite-scroll-component'

//routing
import { useHistory } from "react-router-dom";

class ViewBlogList1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            count: "",
            }
    }


    //get first page data
    getDataOfAllUser = async () => {
        const initialData = await UserService.viewAllUsersBlogList()
        this.props.getFirstPageAllBlogData1({ all_blog_data: initialData.data })
    }

    //get number how many blog are available
    getTotalNumberOfDataCount = async () => {
        const initialData = await UserService.getTotalDataCountList()
        this.props.getTotalCountOfBlog1({ count: initialData.data })
    }

    fetchNextUsers = async () => {
        const { start, page } = this.state;
        this.setState({ page: page + 1 })
        const newData = {
            page: page + 1
        }
        const initialData = await UserService.viewAllUsersBlogNextPageList(newData)

        this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData.data })
    }

    componentDidMount() {
        this.getDataOfAllUser()
        this.getTotalNumberOfDataCount()
    }

    onChangeHandler = (e) => {
        this.setState({ blog_status_flag: e.target.value });
    }

    render() {
        const { all_blog_data } = this.props.FirstPage
        const { count } = this.props.FirstPage
        const { blog_status_flag } = this.state
        return (
            <>
                <div className='create-BLog-inner-wrapper'>
                    <div className='create-new-blog-wrapper-main'>
                        <div className='create-new-blog-wrapper'>
                            <div className='create-new-blog' >
                                View Blog
                            </div>
                        </div>
                    </div>

                    <div className='create-BLog-inner-wrapper1'>
                        <div className='view-BLog-list-wrapper2-main-wrap' id='scrollableDiv'>
                            <InfinitScroll
                                dataLength={all_blog_data.length}
                                next={this.fetchNextUsers}
                                hasMore={all_blog_data.length >= count ? false : true}
                                scrollableTarget="scrollableDiv"
                            >
                                {all_blog_data.map((blog, i) => {
                                    return (
                                    <ViewBlogListInner
                                    blog_status_flag ={blog_status_flag}
                                        key={i}
                                        blog={blog} />
                                    )
                                })}
                            </InfinitScroll>
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
        getFirstPageAllBlogDataNextPage1: (payload) => dispatch(getFirstPageAllBlogDataNextPage(payload)),
        getFirstPageAllBlogData1: (payload) => dispatch(getFirstPageAllBlogData(payload)),
        getTotalCountOfBlog1: (payload) => dispatch(getTotalCountOfBlog(payload))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FirstPageUser);


const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogList1);

function ViewBlogList(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogList;

