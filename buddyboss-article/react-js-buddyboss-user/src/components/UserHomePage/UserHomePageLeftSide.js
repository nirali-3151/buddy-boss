import React, { Component } from 'react'
import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"

import BlogManagement from '../BlogManagement/BlogManagement'
import BlogCatagory from '../BlogCatagory/BlogCatagory'
import MyAccount from '../Account/MyAccount'

import { useHistory } from 'react-router-dom'

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
                        <BlogManagement />
                    </>

                    <>
                        <BlogCatagory />
                    </>

                    <>
                        <MyAccount />
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
