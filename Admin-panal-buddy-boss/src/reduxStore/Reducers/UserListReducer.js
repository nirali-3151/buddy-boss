import {
    GET_AVAILABLE_USER_LIST,
    GET_BLOG_DATA_PERTICULAR_ID,
    MSG_DATA_WITH_USER,
    MSG_DATA_FIRST_PAGE,
    GET_ONE_BLOG_ID,
    UPDATE_DATA_BLOG
} from '../Actions/ActionTypes';

const initialState = {
    Users: [],
    blog_data: [],
    msgs: [],
    blog_data_id:[]
}

function UserListReducer(state = initialState, action) {

    switch (action.type) {
        case GET_AVAILABLE_USER_LIST: {
            return {
                ...state,
                Users: action.payload.Users
            }
        }

        case GET_BLOG_DATA_PERTICULAR_ID: {
            return {
                ...state,
                blog_data: action.payload.blog_data
            }
        }

        case UPDATE_DATA_BLOG: {
            console.log("action.payload is : " , action.payload);
            console.log("statet is : " , state);
            return Object.assign({}, state, {
                blog_data: state.blog_data.map(item => {
                    return item.blog_manage_id === action.payload.blog_data.blog_manage_id ? action.payload.blog_data : item;
                }) // replace matched item and returns the array 
             }); 
            // return {
            //     // ...state,
            //     // blog_data: action.payload.blog_data
            // }
        }

        case GET_ONE_BLOG_ID: {
            console.log("action.payload is : " ,action.payload);
            return {
                ...state,
                blog_data_id: action.payload.blog_data_id
            }
        }

        //get msg data next page
        case MSG_DATA_WITH_USER: {
            return {
                ...state,
                msgs: state.msgs.concat(action.payload.msgs)

            }
        }
        case MSG_DATA_FIRST_PAGE: {
            return {
                ...state,
                msgs: action.payload.msgs
            }
        }

        default:
            return state
    }

}

export default UserListReducer

