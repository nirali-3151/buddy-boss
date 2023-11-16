import React, { Component } from 'react'

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

class ViewBlogWithId1 extends Component {

    createMarkup = () => {
        console.log(" __html: this.state.Data.desc", { __html: this.props.BlogManagement.blog_manage_Data_id.description });
        return { __html: this.props.BlogManagement.blog_manage_Data_id.description };
    }

    render() {
        const { blog_manage_Data_id } = this.props.BlogManagement
        console.log("blog_manage_Data_id", blog_manage_Data_id.catagory_name);
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
                    <img src={`${blog_manage_Data_id.thumbNail_img}`} className="cover2" style={{borderRadius : "0px"}} />
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
