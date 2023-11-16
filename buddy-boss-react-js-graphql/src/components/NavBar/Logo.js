import React, { Component } from 'react'
import Img from "../../assets/Images/buddyboss.logo.png";
// import Img1 from "../../Images/BB_Logos_Colored.png"

import { useHistory } from "react-router-dom";

class Logo1 extends Component {

onClickBuddyBossLogo = () =>{
this.props.history.replace('/')
}

    render() {
        return (
            <div className='logo-component' onClick={this.onClickBuddyBossLogo}>
                <div className='logo'>
                    <img src={Img} alt="avatar" className="cover" />
                    {/* <img src={Img} alt="avatar" className="cover" /> */}
                </div>
                <div className='web-name'>buddyboss</div>
            </div>
        )
    }
}

// export default Logo;
function Logo(props) {
    const history = useHistory();
    return <Logo1 {...props} history={history} />
  }
  export default Logo;