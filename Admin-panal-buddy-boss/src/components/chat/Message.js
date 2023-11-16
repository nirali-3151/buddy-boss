import React, { Component } from 'react'
import '../../Design/ChatBox.css'

import { IoMdSend } from "react-icons/io"

class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {msg} = this.props
        
        return (
          <>
          {/* <div className={`${msg.msg_from === '1' ? "message my_msg" : "message friend_msg"}`}> */}
          <p>{msg.msg}</p>  <br />
          {/* </div> */}
          </>
        )
    }
}

export default Message