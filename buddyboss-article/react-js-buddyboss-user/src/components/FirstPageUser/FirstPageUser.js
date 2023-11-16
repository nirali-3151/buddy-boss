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
import UserService from '../../services/userService';
import NavBar from '../NavBar';

//scrollBar
import InfinitScroll from 'react-infinite-scroll-component'

class FirstPageUser1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }


    //get first page data
    getDataOfAllUser = async () => {
        const initialData = await UserService.viewAllUsersBlogList()
        console.log("intialData", initialData);

        this.props.getFirstPageAllBlogData1({ all_blog_data: initialData })
    }


    fetchNextUsers = async () => {
        console.log("------------------fetchNextUsers-------------------");
        const { count, start, page } = this.state;
        this.setState({ page: page + 1 })
        const newData = {
            page: page + 1
        }
        const initialData = await UserService.viewAllUsersBlogNextPageList(newData)
        console.log("intialData", initialData);

        this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData })
    }

    componentDidMount() {
        this.getDataOfAllUser()
    }

    render() {
        const { all_blog_data } = this.props.FirstPage

        console.log("ref={loadingRef => (this.loadingRef = loadingRef) " , this.loadingRef);
        return (
            <>
            <div className='first-page-user-main-wrapper-includes-navbar'>
                <NavBar />
                <div className='first-page-user-main-wrapper'
                id="scrollableDiv"
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    >
                    <div className='first-page-user-content-main-wrapper'>
                        <InfinitScroll
                            dataLength={all_blog_data.length}
                            next={this.fetchNextUsers}
                            hasMore={true}
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

const Add = connect(mapStateToProps, mapDispatchToProps)(FirstPageUser1);

function FirstPageUser(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default FirstPageUser;

