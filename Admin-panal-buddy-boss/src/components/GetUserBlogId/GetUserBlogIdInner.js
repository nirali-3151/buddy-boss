import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import {
    getOneBlogId,
    updateBlogData
} from "../../reduxStore/Actions/UserListAction"

import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"

import Routes from '../../Routes/Routes';

//import toggle btn
import { Toggle } from './ToggleDesign'

import moment from 'moment'
import UserService from '../../services/userService';

import { fetchToken, onMessageListener } from '../../firebase';

import { Button, Toast } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


class GetUserBlogIdInner1 extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            on: false,
            isTokenFound: false,
            notification: {
                title: '',
                body: '',
            },
            show: false
        }
    }

    onClickToggleBtn = async (blog) => {

        const { notification } = this.state
        this.setState({
            notification: { ...notification, title: "Notification", body: "This is a test notification" }
        })
        this.setState({ show: true });

        const { on } = this.state
        this.setState(prevState => ({
            on: !blog.blog_status_flag
        }));

        //send data in api
        const newData = {
            blog_manage_id: blog.blog_manage_id,
        }

        //send data in reducer
        const newData1 = {
            blog_manage_id: blog.blog_manage_id,
            auth_id: blog.auth_id,
            blog_status_flag: !blog.blog_status_flag,
            catagory_name: blog.catagory_name,
            description: blog.description,
            name: blog.name,
            radio_btn_select: blog.radio_btn_select,
            thumbnail_img: blog.thumbnail_img,
            title: blog.title
        }
        // socket.emit('sendnotification' ,newData1)

        const initialData = await UserService.updateBlogStatusList(newData)
        this.props.updateBlogData1({ blog_data: newData1 })

    }


    onClickViewPerticularBlog = (blog) => {
        this.props.getOneBlogId1({ blog_data_id: blog })
        this.props.history.push(Routes.ViewBlogMainWithId)
    }

    componentDidMount() {
        const { blog } = this.props
        this.setState({ on: blog.blog_status_flag })
    }

    componentDidUpdate(prevProps, prevState) {
        const { blog } = this.props
        const { on } = this.state
        const { blog_manage_id } = this.state
        const isDiff = prevProps.blog_status_flag !== this.props.blog_status_flag
        if (isDiff) {
            this.setState({ on: blog.blog_status_flag })
        }
    }

    render() {

        fetchToken( this.state.isTokenFound);

        onMessageListener().then(payload => {
          this.setState({
            notification: { ...notification, title: "Notification", body: "This is a test notification" }
          })
          this.setState({ show: true });
          console.log(payload);
        }).catch(err => console.log('failed: ', err));
        
        const { blog } = this.props
        const { on, show } = this.state
        const { notification } = this.state
        const validEmailRegex = RegExp(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
        const Data = blog.description.match(validEmailRegex)
        return (
            <>
                {/* <Toast onClose={() => this.setState({ show: false })} show={show} delay={3000} autohide animation style={{
                    position: 'absolute',
                    zIndex:9000,
                    top: 0,
                    right: 0,
                    minWidth: 200
                }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{notification.title}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{notification.body}</Toast.Body>
                </Toast> */}
                <div className='first-page-BLog-list-main-wrapper-desc'>
                    <div className='first-page-BLog-list-main-wrapper-desc-inner'>
                        <div className='first-page-user-name-main-wrapper'>
                            <div className='first-page-user-dp-design'>
                                <img src={buddyboss_logo} alt="avatar" className="cover" />
                            </div>
                            <div className='first-page-user-name-main'>
                                {blog.name}
                            </div>
                            <div className='one-time one-time1'>
                                {moment(blog.updated_at).format('D MMM YYYY')}
                            </div>
                            <Toggle
                                on={on}
                                onClick={() => this.onClickToggleBtn(blog)}
                            />
                        </div>
                        <div className='first-page-BLog-list-main-wrapper-desc-inner1'
                            onClick={() => this.onClickViewPerticularBlog(blog)}>
                            <div className='first-page-BLog-list-main-wrapper-desc-left'>
                                <div className='first-page-BLog-list-main-wrapper-img-wrapper'>
                                    <img src={`${blog.thumbnail_img}`} className="cover2" />
                                </div>
                            </div>
                            <div className='first-page-BLog-list-main-wrapper-desc-right'>
                                <div className='first-page-BLog-list-main-wrapper-desc-right-title'>
                                    {blog.title}
                                </div>

                                <div className='first-page-BLog-list-main-wrapper-desc-right-description'>
                                    <div className='first-page-BLog-list-main-wrapper-desc-right-description-data'>
                                        {!Data ? "" : Data[1].slice(0, 130)}...
                                    </div>
                                </div>
                                <div className='first-page-BLog-list-main-wrapper-desc-right-inner'>
                                    <div className='first-page-BLog-list-main-wrapper-desc-right-blog-catagory'>
                                        {blog.catagory_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        FirstPage: state.FirstPageReducer,
        UserList: state.UserListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOneBlogId1: (payload) => dispatch(getOneBlogId(payload)),
        updateBlogData1: (payload) => dispatch(updateBlogData(payload)),
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(GetUserBlogIdInner1);

function GetUserBlogIdInner(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default GetUserBlogIdInner;

