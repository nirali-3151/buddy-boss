import React, { Component } from 'react'
import { AiOutlineDown } from "react-icons/ai"

class Content extends Component {
    render() {
        return (
            <div className='content-component'>
                <div className='holder_for_navigation'>
                    <div className='top_primary_navigation'>
                        <div>Product</div>
                        <div>Agency</div>
                        <div style={{color : "#e0623c"}}>Resources <AiOutlineDown style={{ fontSize: "10px", paddingTop: "2px" }} /></div>
                    </div>
                    <div className='bottom_secondary_navigation'>
                        <div>Features <AiOutlineDown style={{ fontSize: "10px", paddingTop: "2px" }} /></div>
                        <div>Integrations</div>
                        <div>Plateform</div>
                        <div>Use Cases<AiOutlineDown style={{ fontSize: "10px", paddingTop: "2px" }} /></div>
                        <div>Mobile App <AiOutlineDown style={{ fontSize: "10px", paddingTop: "2px" }} /></div>
                        <div>ShowCase</div>
                        <div>Roadmap</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content