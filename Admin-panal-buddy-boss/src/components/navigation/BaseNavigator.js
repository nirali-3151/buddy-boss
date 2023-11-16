import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../LoginPage'
import AdminHomePage from '../AdminHomePage/AdminHomePage'
import GetUserBlogId from '../GetUserBlogId/GetUserBlogId'
import UserHomePageRightSide from '../AdminHomePage/AdminHomePageRightSide'
import ChatComponent from '../chat/ChatComponent'
import ViewBlogWithId from '../ViewBlogWithId/ViewBlogWithId'

class BaseNavigator extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={LoginPage} exact/>

                    <Route path='/Admin-panal' component={AdminHomePage}/>
                    <Route path= '/Admin-panal/getuserBlogId' component={AdminHomePage} />
                    <Route path= '/Admin-panal/getuserBlogId/chat-component' component={ChatComponent} />
                    <Route path= '/Admin-panal/getuserBlogId/view-blog-with-id' component={ViewBlogWithId} />

                </Switch>
            </div>
        )
    }
}

export default BaseNavigator