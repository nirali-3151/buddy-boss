import React, { Component } from 'react'

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"
import {
    getFirstPageAllBlogData,
    getFirstPageAllBlogDataNextPage
} from "../../reduxStore/Actions/FirstPageAction"

//design
import '../../Design/FirstPageUser.css'
import FirstPageUserInner from './FirstPageUserInner';

//api call
import httpClient from '../../services/httpClient';
import UserService from '../../services/userService'
import NavBar from '../NavBar';

//scrollBar
import InfinitScroll from 'react-infinite-scroll-component'

class FirstPageUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            count: ""
        }
    }


    //get first page data
    getDataOfAllUser = async () => {
        const initialData = await httpClient.viewAllUsersBlog()
        this.props.getFirstPageAllBlogData1({ all_blog_data: initialData })
    }

    //get number how many blog are available
    getTotalNumberOfDataCount = async () => {
        const initialData = await httpClient.getTotalDataCount()
        this.setState({ count: initialData.getTotalCountOfBlog })
    }

    fetchNextUsers = async () => {
        const { count, start, page } = this.state;
        this.setState({ page: page + 1 })
        const newData = {
            page: page + 1
        }
        const initialData = await httpClient.viewAllUsersBlogNextPage(newData)
        this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData })
    }

    componentDidMount() {
        this.getDataOfAllUser()
        this.getTotalNumberOfDataCount()
    }

    render() {
        const { all_blog_data } = this.props.FirstPage
        const { count } = this.state

        return (
            <>
                <div className='first-page-user-main-wrapper-includes-navbar'>
                    <NavBar />
                    <div className='first-page-user-main-wrapper'
                        id="scrollableDiv"
                    >
                        <div className='first-page-user-content-main-wrapper'>
                            <InfinitScroll
                                dataLength={all_blog_data.length}
                                next={this.fetchNextUsers}
                                hasMore={all_blog_data.length >= count ? false : true}
                                scrollableTarget="scrollableDiv"
                            >
                                {all_blog_data.map((blog, i) => (
                                    <FirstPageUserInner
                                        blog={blog} />
                                ))}
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
        getFirstPageAllBlogData1: (payload) => dispatch(getFirstPageAllBlogData(payload)),
        getFirstPageAllBlogDataNextPage1: (payload) => dispatch(getFirstPageAllBlogDataNextPage(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPageUser);


// const Add = connect(mapStateToProps, mapDispatchToProps)(FirstPageUser1);

// function FirstPageUser(props) {
//     const history = useHistory();
//     return <Add {...props} history={history} />
// }
// export default FirstPageUser;

