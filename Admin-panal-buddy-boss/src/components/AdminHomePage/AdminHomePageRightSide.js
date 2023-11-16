import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewBlogList from '../BlogList/ViewBlogList/ViewBlogList'
import ViewUserList from '../UserList/ViewUserList/ViewUserList'
import GetUserBlogId from '../GetUserBlogId/GetUserBlogId'
import ChatComponent from '../chat/ChatComponent'
import ViewBlogWithId from '../ViewBlogWithId/ViewBlogWithId'

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
                    <Route path='/Admin-panal' component={ViewUserList} exact />
                    <Route path= '/Admin-panal/blogList' component={ViewBlogList} />

                    <Route path= '/Admin-panal/getuserBlogId' component={GetUserBlogId} exact/>
                    <Route path= '/Admin-panal/getuserBlogId/chat-component' component={ChatComponent} />
                    <Route path= '/Admin-panal/getuserBlogId/view-blog-with-id' component={ViewBlogWithId} />


                    {/* <Route path='/Admin-panal' component={ViewUserList} exact /> */}
                    {/* <Route path='/user-dashboard/blog-management' component={ViewBlogList} exact />
                    <Route path='/user-dashboard/blog-management/create-new-blog' component={CreateBlog} />
                    <Route path='/user-dashboard/blog-management/Update-new-blog' component={UpdateBlog} />
                    <Route path='/user-dashboard/blog-management/View-blog-id' component={ViewBlogWithId} />

                    <Route path='/user-dashboard/Blog-catagory' component={ViewBlogCatagory} exact />
                    <Route path='/user-dashboard/Blog-catagory/add-new-blog-catagory' component={AddBlogCatagory} />
                    <Route path='/user-dashboard/Blog-catagory/edit-blog-catagory' component={EditBlogCatagory} /> */}
                </Switch>
            </>
        )
    }
}


export default UserHomePageRightSide