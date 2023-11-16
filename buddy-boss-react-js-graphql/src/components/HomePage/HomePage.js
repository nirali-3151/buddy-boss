import React, { Component } from 'react'
import NavBar from '../NavBar'
import Body from '../body'
import UserDashBoard from '../UserDashboard/UserDashBoard'
import FirstPageUser from '../FirstPageUser/FirstPageUser'
import ViewBlogMainWithId from '../ViewBlogMainWithId/ViewBlogMainWithId'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
            <div>
                <Route path='/' component={FirstPageUser} exact />
                <Route path='/user-profile-blog' component={Body} exact />
                <Route path='/user-profile-blog/user-profile-blog-id' component={ViewBlogMainWithId} />

                {/* <NavBar />
                <FirstPageUser /> */}
                {/* <NavBar />
                <Body /> */}
            </div>
        )
    }
}

export default HomePage
