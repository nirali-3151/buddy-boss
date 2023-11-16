import React, { Component } from 'react'
import {
    BsTypeBold,
    BsTypeItalic,
    BsTypeStrikethrough,
    BsLink45Deg
} from 'react-icons/bs'

import {
    MdFormatListNumbered,
    MdOutlineFormatListBulleted
} from 'react-icons/md'

class FontFormat extends Component {
    render() {
        return (
            <>
              <div className='font-format-class f1'> <BsTypeBold /> </div>
              <div className='font-format-class'> <BsTypeItalic /> </div>
              <div className='font-format-class'>  <BsTypeStrikethrough /> </div>
              <div className='font-format-class'>  <BsLink45Deg /> </div>
              <div className='font-format-class'> <MdFormatListNumbered /> </div>
              <div className='font-format-class'>  <MdOutlineFormatListBulleted /> </div>
            </>
        )
    }
}

export default FontFormat