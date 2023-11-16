import React, { Component } from 'react'

//routing
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux"
import {
    getFirstPageAllBlogData,
    getFirstPageAllBlogDataNextPage,
    getTotalCountOfBlog,
    SetKeyOBlogCatagory
} from "../../reduxStore/Actions/FirstPageAction"

//design
import '../../Design/FirstPageUser.css'
import FirstPageUserInner from './FirstPageUserInner';

//api call
import UserService from '../../services/userService';
import NavBar from '../NavBar';

//scrollBar
import InfinitScroll from 'react-infinite-scroll-component'

import ChipView from './ChipView'

class FirstPageUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            count: "",
            chipView_data: [],
            selected: 0
        }
        this.myRef = React.createRef()   // Create a ref object 
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
        const { page } = this.state;
        this.setState({ page: page + 1 })
        const newData = {
            page: page + 1
        }
        const initialData = await UserService.viewAllUsersBlogNextPageList(newData)

        this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData.data })
    }

    //fetch next page sort catagory Data
    fetchNextCatagorySorData = async () => {
        const { page } = this.state;
        const { selected } = this.props.FirstPage
        this.setState({ page: page + 1 })
        const newData = {
            page: page + 1,
            blog_catagory_id: selected
        }
        const initialData = await UserService.sortDataByCatagoryNextPageList(newData)
        this.props.getFirstPageAllBlogDataNextPage1({ all_blog_data: initialData.data })
    }

    //get total number of count in catagory dsort
    getCountCatagorySort = async () => {
        const { selected } = this.props.FirstPage
        const newData = {
            blog_catagory_id: selected
        }
        const initialData = await UserService.getCountsortDataByCatagoryList(newData)
        this.props.getTotalCountOfBlog1({ count: initialData.data })
    }

    //get catagory data in chip view
    getCatagoryData = async () => {
        const initialData = await UserService.blogCatagoryDropDownList();
        this.setState({ chipView_data: initialData.data })
    }

    getDataBasedOnCatagory = async () => {
        const { all_blog_data, selected, count } = this.props.FirstPage
        const newData = {
            blog_catagory_id: selected,
        }
        const initialData = await UserService.sortDataByCatagoryList(newData)
        this.props.getFirstPageAllBlogData1({ all_blog_data: initialData.data })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { selected, all_blog_data } = this.props.FirstPage

        const isDiff1 = selected === prevProps.FirstPage.selected && selected !== 0 && all_blog_data.length <= 5 && all_blog_data !== prevProps.FirstPage.all_blog_data
        if (isDiff1) {
            this.myRef.current.scrollTo(0, 0);
            this.setState({ page: 1 })
            this.props.SetKeyOBlogCatagory1({ selected: 0 })
            this.getTotalNumberOfDataCount();
            this.getDataOfAllUser()
        }

        const isdiff = selected !== prevProps.FirstPage.selected && selected !== 0
        if (isdiff) {
            this.myRef.current.scrollTo(0, 0);
            this.setState({ page: 1 })
            this.getCountCatagorySort()
        }

    }

    componentDidMount() {
        this.getDataOfAllUser()
        this.getTotalNumberOfDataCount()
        this.getCatagoryData()
    }

    render() {
        const { all_blog_data } = this.props.FirstPage
        const { count } = this.props.FirstPage
        const { chipView_data } = this.state
        const { page } = this.state
        const { selected } = this.props.FirstPage

        return (
            <>
                <div className='first-page-user-main-wrapper-includes-navbar'>
                    <NavBar />
                    <div style={{ width: "81%", paddingTop: "74px", zIndex: "500" }}>
                        {chipView_data.slice(0, 1).map((data) => {
                            return (
                                <ChipView
                                    data={data}
                                    page={page}
                                    chipView_data={chipView_data}
                                    setPageValueToOne={() => { this.setPageValueToOne() }}
                                />
                            )
                        })
                        }
                    </div>
                    <div className='first-page-user-main-wrapper first-page-user-main-wrapper1'
                        id="scrollableDiv"
                        ref={this.myRef}
                    >
                        {all_blog_data.length === 0 ? <p className='first-page-dont-have-any-blog'>don't have any blog</p> :
                            <div className='first-page-user-content-main-wrapper'>
                                <InfinitScroll
                                    pageStart={1}
                                    initialScrollY = {0}
                                    scrollThreshold = "200px"
                                    dataLength={all_blog_data.length}
                                    hasMore={all_blog_data.length >= count ? false : true}
                                    next={selected === 0 ? this.fetchNextUsers : this.fetchNextCatagorySorData}
                                    scrollableTarget="scrollableDiv"
                                >
                                    {all_blog_data.map((blog, i) => (
                                        <FirstPageUserInner
                                            blog={blog}
                                        />
                                    ))}
                                </InfinitScroll>
                            </div>
                        }
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
        SetKeyOBlogCatagory1: (payload) => dispatch(SetKeyOBlogCatagory(payload)),
        getFirstPageAllBlogDataNextPage1: (payload) => dispatch(getFirstPageAllBlogDataNextPage(payload)),
        getFirstPageAllBlogData1: (payload) => dispatch(getFirstPageAllBlogData(payload)),
        getTotalCountOfBlog1: (payload) => dispatch(getTotalCountOfBlog(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPageUser);