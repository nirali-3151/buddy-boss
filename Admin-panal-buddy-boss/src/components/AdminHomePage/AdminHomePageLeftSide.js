import React, { Component } from 'react'
import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"

import UserListLeftSide from '../Left-side/UserList/UserList'
import BlogListLeftSide from '../Left-side/BlogList/BlogList'


import { useHistory } from 'react-router-dom'
import Logout from '../Left-side/LogOut/LogOut'

class UserHomePageLeftSide1 extends Component {

    onClickBuddyBossLogo = () => {
        this.props.history.replace('/')
    }

    render() {
        return (
            <>
                <div className='buddy-boss-logo-createBlog-wrapper' onClick={this.onClickBuddyBossLogo}>
                    <div className='buddy-boss-logo-createBlog-page'>
                        <img src={buddyboss_logo} alt="avatar" className="cover" />
                    </div>
                    <div className='buddy-boss-logo-createBlog-web-name1'>buddyboss</div>
                </div>

                <div className='create-BLog-inner-wrapper-main-left-inner-main '>
                    <>
                        <UserListLeftSide />
                    </>

                    <>
                        <BlogListLeftSide />
                    </>

                    <>
                        <Logout />
                    </>
                </div>
            </>
        )
    }
}

function UserHomePageLeftSide(props) {
    const history = useHistory();
    return <UserHomePageLeftSide1 {...props} history={history} />
}
export default UserHomePageLeftSide;
