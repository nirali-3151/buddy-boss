import React, { Component } from 'react'
import Img from '../../../assets/Images/img_preview.jpg'

class ImageBtn extends Component {

    render() {
        const { onClickAddThumbnailImg } = this.props
        return (
            <div className='create-blog-upload-img-wrapper'>
                <div className='create-blog-upload-img-btn' onClick={onClickAddThumbnailImg} >
                    <img src={Img} alt="avatar" className="cover" />
                </div>
            </div>
        )
    }
}

export default ImageBtn