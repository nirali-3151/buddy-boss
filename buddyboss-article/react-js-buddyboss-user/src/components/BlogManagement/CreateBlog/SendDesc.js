import React, { Component } from 'react'
import { FiPlus } from 'react-icons/fi'
import { IoMdSend } from 'react-icons/io'

class SendDesc extends Component {

  render() {
    const { onClickPublishBtn } = this.props

    return (
      <>
        <div className='login-btn-wrapper'>
          <div className='login-btn' onClick={onClickPublishBtn}>
            Publish
          </div>
        </div>
        {/* <div className='create-blog-send-desc-left'>
          <div className='create-blog-send-desc plus'><FiPlus /></div>
        </div>
        <div className='create-blog-send-desc-right'>
          <div className='create-blog-send-desc'><IoMdSend /></div>
        </div> */}
      </>
    )
  }
}

export default SendDesc
