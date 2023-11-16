import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import "../../../Design/TableDesign.css"

import UserService from '../../../services/userService'

import {
    getBlogCatagoryData,
    editBlogCatagoryData
} from '../../../reduxStore/Actions/BlogCatagory'

import AddBlogCatagoryBtn from './AddBlogCatagoryBtn';

import {
    MdModeEdit,
    MdDelete
} from 'react-icons/md'
import Routes from '../../../Routes/Routes';

class ViewBlogCatagory1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagory_id: 1,
        }
    }

    //get all catagory  Data
    getViewCatagoryData = async () => {
        const Token = localStorage.getItem('Token');
        const initialData = await UserService.blogCatagoryViewBlogList(Token);
        this.props.getBlogCatagoryData1({ blog_catagory_Data: initialData })
    }

    //navigate to the Add BlogCatagory Page
    onClickAddNewCatagoryBtn = () => {
        this.props.history.push(Routes.AddBlogCatagory)
    }

    //navigate to the edit catagory  page
    onClickEditCatagoryBtn = (user) => {
        this.props.editBlogCatagoryData1({ Edit_Data: user })
        this.props.history.push(Routes.EditBlogCatagory)
    }

    onClickDeleteCatagoryBtn = async (user) => {
        var newData = {
            blog_catagory_id: user.blog_catagory_id,
        }

        const initialData = await UserService.blogCatagoryDeleteBlogList(newData);

        this.getViewCatagoryData()

    }

    componentDidMount() {
        this.getViewCatagoryData()
    }

    render() {
        const { blog_catagory_Data } = this.props.BlogCatagory
        return (
            <div className='create-BLog-inner-wrapper'>
                <div className='create-new-blog-wrapper-main'>
                    <div className='create-new-blog-wrapper'>
                        <div className='create-new-blog' >
                            View Blog Catagory
                        </div>

                        <div className='create-blog-add-new-Data'>
                            <AddBlogCatagoryBtn
                                onClickAddNewCatagoryBtn={this.onClickAddNewCatagoryBtn}
                            />
                        </div>
                    </div>
                </div>

                <div className='create-BLog-inner-wrapper1'>
                    <div className='view-BLog-list-wrapper2-main-wrap'>
                        <div className='view-BLog-list-wrapper2-main'>
                            {blog_catagory_Data.length === 0 ?
                                <p className='create-first-blog-if-not'>Create your first catagory</p>
                                :

                                <table className='table1'>
                                    <thead>
                                        <tr >
                                            <th>blog catagory id</th>
                                            <th>Catagory Name</th>
                                            <th>Edit Blog Catagory</th>
                                            <th>Delete Blog Catagory</th>
                                            {/* <th>asdfg</th> */}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            blog_catagory_Data.map((user, i) => (
                                                <tr className='view-blog-catagory-table-data' key={i}>
                                                    <td style={{ paddingLeft: "40px" }}>{i + 1}</td>
                                                    <td>{user.catagory_name}</td>
                                                    <td>
                                                        <MdModeEdit
                                                            onClick={() => this.onClickEditCatagoryBtn(user)}
                                                            className='view-blog-catagory-edit-icon' />
                                                    </td>
                                                    <td>
                                                        <MdDelete
                                                            onClick={() => this.onClickDeleteCatagoryBtn(user)}
                                                            className='view-blog-catagory-edit-icon' />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    <div>
                                    </div>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        BlogCatagory: state.BlogCatagoryReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlogCatagoryData1: (payload) => dispatch(getBlogCatagoryData(payload)),
        editBlogCatagoryData1: (payload) => dispatch(editBlogCatagoryData(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogCatagory1);

function ViewBlogCatagory(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogCatagory;

