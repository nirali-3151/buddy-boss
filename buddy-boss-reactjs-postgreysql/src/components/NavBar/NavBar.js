import React, { Component } from 'react'
import "../../Design/navBar.css"
import Logo from './Logo'
import Content from './Content'
import AccountHandle from './Account.handle'
// import 

class NavBar extends Component {
    render() {
        return (
            <div className='outer-header-wrapper-main'>
                <div className='outer-header'>
                    <div className='inner-header'>
                        <div className='site-header'>
                            <Logo />
                        </div>
                        <div className='site-header1'>
                            {/* <Content /> */}
                        </div>
                        <div className='site-header2'>
                            <AccountHandle />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
