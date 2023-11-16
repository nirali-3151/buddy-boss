import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import RegisterPage from "../RegisterPage"
import UserDashBoard from '../UserDashboard/UserDashBoard'
import CreateBlog from '../BlogManagement/CreateBlog/CreateBlog'
import UserHomePage from '../UserHomePage'
import UpdateBlog from '../BlogManagement/UpdateBlog/UpdateBlog'

import AddBlogCatagory from '../BlogCatagory/AddBlogCatagory/AddBlogCatagory'
import EditBlogCatagory from '../BlogCatagory/EditBlogCatagory/EditBlogCatagory'
import ViewBlogList from '../BlogManagement/ViewBlogList/ViewBlogList'
import ViewBlogWithId from '../BlogManagement/ViewBlogWithId/ViewBlogWithId'
import ViewBlogMainWithId from '../ViewBlogMainWithId/ViewBlogMainWithId'

import Body from '../body'
import FirstPageUser from '../FirstPageUser/FirstPageUser'

import ChatComponent from '../chat/ChatComponent'

class BaseNavigator extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={FirstPageUser} exact />
                    <Route path='/user-profile-blog' component = {Body} exact />
                    <Route path='/view-blog-data' component = {ViewBlogMainWithId} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/user-profile-blog/user-profile-blog-id' component={ViewBlogMainWithId}  />
               
                    <Route path='/user-dashboard/blog-management' component={UserDashBoard} exact />
                    <Route path='/user-dashboard/blog-management' component={UserHomePage}  />
                    <Route path='/user-dashboard/blog-management/View-blog-id' component={ViewBlogWithId} />
                    <Route path='/user-dashboard/blog-management/create-new-blog' component={CreateBlog} />
                    <Route path='/user-dashboard/blog-management/Update-new-blog' component={UpdateBlog} />

                    {/* <Route path='/user-dashboard/update-blog' component={UserHomePage} /> */}

                    <Route path='/user-dashboard/Blog-catagory' component={UserHomePage} />
                    <Route path='/user-dashboard/Blog-catagory/add-new-blog-catagory' Component={AddBlogCatagory} />
                    <Route path='/user-dashboard/Blog-catagory/edit-blog-catagory' Component={EditBlogCatagory} />

                    <Route path='/user-dashboard/blog-management/chat-with-admin' component={ChatComponent} />

                </Switch>
            </div>
        )
    }
}

export default BaseNavigator