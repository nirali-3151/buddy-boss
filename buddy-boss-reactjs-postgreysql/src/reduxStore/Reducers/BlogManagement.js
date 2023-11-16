import {
    GET_BLOG_MANAGEMENT_DATA,
    GET_BLOG_MANAGEMENT_DATA_WITH_ID,
    EDIT_BLOG_MANAGEMENT_DATA,
    GET_AUTH_ID,
    ADD_BLOG_MANAGEMENT_DATA
} from '../Actions/ActionTypes';

const initialState = {
    blog_manage_Data :[],
    blog_manage_Data_id :[],
    edit_blog_manage_data:[],
    authId:""
}

function BlogManagementReducer(state = initialState, action) {

    switch (action.type) {
        case GET_BLOG_MANAGEMENT_DATA: {
            return {
                ...state,
                blog_manage_Data : action.payload.blog_manage_Data
            }
        }

        case GET_BLOG_MANAGEMENT_DATA_WITH_ID: {
            return {
                ...state,
                blog_manage_Data_id : action.payload.blog_manage_Data_id
            }
        }

        case ADD_BLOG_MANAGEMENT_DATA: {
            return {
                ...state,
                blog_manage_Data:state.blog_manage_Data.concat(action.payload.blog_manage_Data)

                // edit_blog_manage_data : action.payload.edit_blog_manage_data
            }
        }

        case EDIT_BLOG_MANAGEMENT_DATA: {
            return {
                ...state,
                edit_blog_manage_data : action.payload.edit_blog_manage_data
            }
        }

        case GET_AUTH_ID: {
            return {
                ...state,
                authId: action.payload.authId
            }
        }

        default:
            return state
    }

}

export default BlogManagementReducer

