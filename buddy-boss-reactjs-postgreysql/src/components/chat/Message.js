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
          <p>{msg.msg}</p> <br />
          </>
        )
    }
}

export default Message