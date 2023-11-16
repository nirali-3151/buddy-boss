import React, { Component } from 'react'
import '../../Design/ChatBox.css'

import { IoMdSend } from "react-icons/io"

class MessageForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { msg } = this.props
        const { onChange } = this.props
        const {onClickMsgSendBtn} = this.props

        return (
            <form className="chat_input" onSubmit={onClickMsgSendBtn}>
                <input
                    type="text"
                    placeholder="Enter message"
                    name='msg'
                    value={msg}
                    onChange={onChange}
                />
                <span 
                className='message_form_Send_btn'
                onClick={onClickMsgSendBtn}
                >
                    <IoMdSend className='message_form_send_icon' />
                </span>
            </form>
        )
    }
}

export default MessageForm