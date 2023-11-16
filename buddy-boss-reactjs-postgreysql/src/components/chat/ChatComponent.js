import React, { Component } from 'react';

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import MessageForm from './MessageForm';
import Message from './Message';

import { socket } from '../../assets/socket/socket_link'

import {
    msgDataWithUser,
    msgDataFirstPage
} from '../../reduxStore/Actions/ChatAdmin'

import UserService from '../../services/userService';

class ChatComponent1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            Data: {
                msg: "",
                to: "",
                From: "",
                Created_at: ""
            },
        }
    }

    onChangeHandler = (e) => {
        const { Data } = this.state
        this.setState({
            Data: { ...Data, [e.target.name]: e.target.value }
        });
    }


    //connect user with room on chat click
    connectToRoom = () => {
        const Data = localStorage.getItem("auth_id")
        socket.emit("join_room", Data);
    }

    //on click msg send btn
    onClickMsgSendBtn = async (e) => {
        e.preventDefault();
        const { msg, Created_at } = this.state.Data
        const { Data } = this.state

        const auth_id = localStorage.getItem("auth_id")
        let messageContent = {
            content: {
                msg: msg,
                to: 1,
                msg_from: auth_id,
                created_at: Created_at
            },
        };

        await socket.emit("send_message", messageContent);
        this.props.msgDataWithUser1({ msgs: messageContent.content })
        this.setState({ Data: { ...Data, msg: "" } })
    }

    //call receive msg socket in component did mount
    receiveMessage = () => {
        socket.on("receive_message", (data) => {
            this.props.msgDataWithUser1({ msgs: data })
        });
    }

    //get already exist messages
    getMessagesList = async () => {
        const auth_id = localStorage.getItem("auth_id")
        this.setState({auth_id :auth_id})
        const newData = {
            auth_id: auth_id
        }
        const initialData = await UserService.getMessagesList(newData)
        this.props.msgDataFirstPage1({ msgs: initialData.data })
    }

    componentDidMount() {
        this.receiveMessage()
        this.connectToRoom();
        this.getMessagesList()
    }

    render() {
        const { auth_id } = this.state
        const { msg } = this.state.Data

        const { msgs } = this.props.ChatList

        return (
            <div className='create-BLog-inner-wrapper'>
                <div className='create-new-blog-wrapper-main'>
                    <div className='create-new-blog-wrapper'>
                        <div className='create-new-blog' >
                            Chat With Admin
                        </div>
                        <div className='create-blog-add-new-Data'>
                        </div>
                    </div>
                </div>

                <div className='create-BLog-inner-wrapper1'>
                    <div className='view-BLog-list-wrapper2-main-wrap'>
                        <div
                            className="chatbox"
                            id="scrollableDiv"
                        >
                            {msgs.map((msg, i) => {
                                return (
                                    <div className={`${msg.msg_from === auth_id ? "message my_msg" : "message friend_msg"}`}>
                                        <Message
                                            msg={msg}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <MessageForm
                            msg={msg}
                            onChange={this.onChangeHandler}
                            onClickMsgSendBtn={(e) => this.onClickMsgSendBtn(e)} />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ChatList: state.ChatListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        msgDataWithUser1: (payload) => dispatch(msgDataWithUser(payload)),
        msgDataFirstPage1: (payload) => dispatch(msgDataFirstPage(payload)),
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ChatComponent1);

function ChatComponent(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ChatComponent;

