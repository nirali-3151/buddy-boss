import {
    GET_FIRST_PAGE_ALL_BLOG_DATA,
    GET_BLOG_DATA_PERTICULAR_ID,
    GET_USER_BLOG_DATA,
    GET_ALL_USER_BLOG_ID,
    GET_FIRST_PAGE_ALL_BLOG_DATA_NEXT_PAGE,
    GET_MAIN_USER_BLOG_DATA_PERTICULAR_ID,
    SET_VALUE_OF_MENU_FLAG
} from '../Actions/ActionTypes';

const initialState = {
    all_blog_data :[],
    blog_data:[],
    get_user_blog_data:[],
    get_blog_user_id:[],
    Main_blog_data:[],
    value:false
}

function FirstPageReducer(state = initialState, action) {

    switch (action.type) {
        case GET_FIRST_PAGE_ALL_BLOG_DATA: {
            return {
                ...state,
                all_blog_data : action.payload.all_blog_data.data
            }
        }

        case GET_FIRST_PAGE_ALL_BLOG_DATA_NEXT_PAGE: {
            return {
                ...state,
                all_blog_data:state.all_blog_data.concat(action.payload.all_blog_data.data)
            }
        }

        case GET_BLOG_DATA_PERTICULAR_ID: {
            return {
                ...state,
                blog_data : action.payload.blog_data
            }
        }

        case GET_USER_BLOG_DATA: {
            return {
                ...state,
                get_user_blog_data: action.payload.get_user_blog_data
            }
        }

        case GET_ALL_USER_BLOG_ID: {
            return {
                ...state,
                get_blog_user_id: action.payload.get_blog_user_id.data
            }
        }

        case GET_MAIN_USER_BLOG_DATA_PERTICULAR_ID: {
            return {
                ...state,
                Main_blog_data: action.payload.Main_blog_data.data
            }
        }

        case SET_VALUE_OF_MENU_FLAG: {
            console.log("action.payload is : " , );
            return {
                ...state,
                value: !state.value
            }
        }

        default:
            return state
    }

}

export default FirstPageReducer

