import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Blog Management
import ViewBlogList from '../BlogManagement/ViewBlogList/ViewBlogList'
import CreateBlog from '../BlogManagement/CreateBlog/CreateBlog'
import UpdateBlog from '../BlogManagement/UpdateBlog/UpdateBlog'

// BLog Catagory
import ViewBlogCatagory from '../BlogCatagory/ViewBlogCatagory/ViewBlogCatagory'
import EditBlogCatagory from '../BlogCatagory/EditBlogCatagory/EditBlogCatagory'
import AddBlogCatagory from '../BlogCatagory/AddBlogCatagory/AddBlogCatagory'
import ViewBlogWithId from '../BlogManagement/ViewBlogWithId/ViewBlogWithId'

import ChatComponent from '../chat/ChatComponent'

class UserHomePageRightSide extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path='/user-dashboard/blog-management' component={ViewBlogList} exact />
                    <Route path='/user-dashboard/blog-management/create-new-blog' component={CreateBlog} />
                    <Route path='/user-dashboard/blog-management/Update-new-blog' component={UpdateBlog} />
                    <Route path='/user-dashboard/blog-management/View-blog-id' component={ViewBlogWithId} />

                    <Route path='/user-dashboard/Blog-catagory' component={ViewBlogCatagory} exact />
                    <Route path='/user-dashboard/Blog-catagory/add-new-blog-catagory' component={AddBlogCatagory} />
                    <Route path='/user-dashboard/Blog-catagory/edit-blog-catagory' component={EditBlogCatagory} />

                    <Route path='/user-dashboard/blog-management/chat-with-admin' component={ChatComponent} />

                </Switch>
            </>
        )
    }
}


export default UserHomePageRightSide