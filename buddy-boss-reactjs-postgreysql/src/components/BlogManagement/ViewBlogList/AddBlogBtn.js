import React, { Component } from 'react'

class AddBlogBtn extends Component {
    render() {
        const {onClickAddNewBlogBtn} = this.props
        return (
            <>
                {/* <div className='create-blog-add-new-catagory-btn'> */}
                    <div className='add-new-catagory-btn'  onClick={onClickAddNewBlogBtn}>
                       create new blog
                    </div>
                {/* </div> */}
            </>
        )
    }
}

export default AddBlogBtn