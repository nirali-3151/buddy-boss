import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
import UserService from '../../services/userService';
import { connect } from 'react-redux';

import {
    SetKeyOBlogCatagory,
    getFirstPageAllBlogData
} from "../../reduxStore/Actions/FirstPageAction"

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}>
        {text}
    </div>;
};

export const Menu = (chipView_data, selected) =>
    chipView_data.map(el => {
        return <MenuItem text={el.catagory_name} key={el.blog_catagory_id} selected={selected} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <div className={className}>
            {text}
        </div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = '';

class ChipView extends Component {

    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(this.props.chipView_data, selected);
    }

    state = {
        selected
    };
 

    onSelect = async(key) => {
        const newData = {
            blog_catagory_id : key,
        }
        const initialData = await UserService.sortDataByCatagoryList(newData)
        this.props.getFirstPageAllBlogData1({ all_blog_data: initialData.data })
        this.props.SetKeyOBlogCatagory1({selected : key})
    }

    render() {
        const { selected } = this.props.FirstPage
        const { chipView_data } = this.props
        const menu = this.menuItems;

        return (
            // <div className='chip-view-inner-main-wrapper' >
            <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
            />
            // </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        FirstPage: state.FirstPageReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetKeyOBlogCatagory1: (payload) => dispatch(SetKeyOBlogCatagory(payload)),
        getFirstPageAllBlogData1: (payload) => dispatch(getFirstPageAllBlogData(payload)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChipView);

