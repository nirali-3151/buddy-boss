import React, { Component } from 'react'

class AddBlogCatagoryBtn extends Component {
    render() {
        const {onClickAddNewCatagoryBtn} = this.props
        return (
            <div>
                <div className='create-blog-add-new-catagory-btn'>
                    <div className='add-new-catagory-btn'  onClick={onClickAddNewCatagoryBtn}>
                        Add Catagory
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBlogCatagoryBtn