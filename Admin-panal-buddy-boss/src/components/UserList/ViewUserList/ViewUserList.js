import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

//import  Designs
import "../../../Design/TableDesign.css"
import '../../../Design/createBlog.css'
import '../../../Design/responsiveCreateBlog.css'
import '../../../Design/ViewBlogList.css'

import UserService from '../../../services/userService'

import { ViewAvailableUsers } from "../../../reduxStore/Actions/UserListAction"

import Routes from '../../../Routes/Routes';


class ViewBlogList1 extends Component {

    //get all available Users Data
    getUserData = async () => {
        const getToken = localStorage.getItem("Token")
        this.setState({ Token: getToken })
        const initialData = await UserService.GetUserDataList();
        this.props.ViewAvailableUsers1({ Users: initialData.data })
    }

    //onClick User Data Page Redirect to UserBlog
    onClickUserInformation = (user) => {
        localStorage.setItem("auth_id", user.auth_id)
        localStorage.setItem("username", user.name)
        this.props.history.push(Routes.GetUserBlogId)
    }

    componentDidMount() {
        this.getUserData()
    }

    render() {
        const { Users } = this.props.UserList
        return (
            <div className='create-BLog-inner-wrapper'>
                    <>
                        <div className='create-new-blog-wrapper-main'>
                            <div className='create-new-blog-wrapper'>
                                <div className='create-new-blog' >
                                    View User List
                                </div>
                            </div>
                        </div>

                        <div className='create-BLog-inner-wrapper1'>
                            <div className='view-BLog-list-wrapper2-main-wrap'>
                                <div className='view-BLog-list-wrapper2-main'>
                                    <table className='table1'>
                                        <thead>
                                            <tr >
                                                <th>User Id</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                Users.map((user, i) => (
                                                    <tr className='view-blog-catagory-table-data'
                                                        key={i}
                                                        onClick={() => this.onClickUserInformation(user)}>
                                                        <td style={{ paddingLeft: "40px" }}>{user.auth_id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        <div>
                                        </div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        UserList: state.UserListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ViewAvailableUsers1: (payload) => dispatch(ViewAvailableUsers(payload)),
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogList1);

function ViewBlogList(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogList;

