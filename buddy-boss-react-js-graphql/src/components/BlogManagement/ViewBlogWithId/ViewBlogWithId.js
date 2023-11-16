import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import { liveURL } from '../../../constants/LiveUrl';

class ViewBlogWithId1 extends Component {

    createMarkup = () => {
        return { __html: this.props.BlogManagement.blog_manage_Data_id.description };
    }

    render() {
        const { blog_manage_Data_id } = this.props.BlogManagement
        return (
            <>
                <div className='view-blog-with-id-wrapper'
                    style={{ backgroundColor: "#fff" }}
                >

                    <div className='view-blog-with-id-wrapper-main-inner'>
                        <div className='view-blog-with-id-wrapper-catagory-name'>
                            {blog_manage_Data_id.catagory_name}
                        </div>

                        <div className='view-blog-with-id-wrapper-blog-title'>
                            <div className='view-blog-with-id-wrapper-blog-title-inner'>
                                {blog_manage_Data_id.title}
                            </div>
                        </div>
                    </div>

                    <div className='view-blog-with-id-wrapper-main-image'>
                    {/* <img src={`https://buddy-boss-nodejs.herokuapp.com/${blog_data.thumbnail_img}`} className="cover2" style={{ borderRadius: "0px" }} /> */}

                    <img src={`${blog_manage_Data_id.thumbnail_img}`} className="cover2" style={{borderRadius : "0px"}} />
                    </div>

                    <div className='view-blog-with-id-wrapper-ckEditor-data'>
                        <div dangerouslySetInnerHTML={this.createMarkup()} className='view-blog-with-id-wrapper-ckEditor-editor'>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        BlogManagement: state.BlogManagementReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getBlogManagementData1: (payload) => dispatch(getBlogManagementData(payload)),
        // getBlogManagementDataWithId1:(payload) => dispatch(getBlogManagementDataWithId(payload))
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewBlogWithId1);

function ViewBlogWithId(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default ViewBlogWithId;
