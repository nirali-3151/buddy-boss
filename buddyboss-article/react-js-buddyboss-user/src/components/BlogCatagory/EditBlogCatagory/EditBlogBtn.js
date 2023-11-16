import React, { Component } from 'react'

class EditBlogBtn extends Component {

  render() {
    const { onClickEditBtn } = this.props
    console.log("---------onClickPublishBtn-------------");
    return (
      <>
        <div className='login-btn-wrapper'>
          <div className='login-btn' onClick={onClickEditBtn}>
            Edit
          </div>
        </div>
      </>
    )
  }
}

export default EditBlogBtn
