import {
    GET_BLOG_CATAGORY_DATA,
    EDIT_BLOG_CATAGORY_DATA
} from '../Actions/ActionTypes';

const initialState = {
    blog_catagory_Data :[],
    Edit_Data :[]
}

function BlogCatagoryReducer(state = initialState, action) {

    switch (action.type) {
        case GET_BLOG_CATAGORY_DATA: {
            return {
                ...state,
                blog_catagory_Data : action.payload.blog_catagory_Data
            }
        }

        case EDIT_BLOG_CATAGORY_DATA: {
            return {
                ...state,
                Edit_Data : action.payload.Edit_Data
            }
        }

        default:
            return state
    }

}

export default BlogCatagoryReducer

