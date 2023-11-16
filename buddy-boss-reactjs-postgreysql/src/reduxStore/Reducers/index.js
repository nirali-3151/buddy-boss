import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import BlogCatagoryReducer from './BlogCatagoryReducer'
import BlogManagementReducer from "./BlogManagement"
import FirstPageReducer from './FirstPageReducer'
import ChatListReducer from './ChatReducer'
 
const reducer = combineReducers(
    {
        LoginReducer:LoginReducer,
        BlogCatagoryReducer:BlogCatagoryReducer,
        BlogManagementReducer:BlogManagementReducer,
        FirstPageReducer:FirstPageReducer,
        ChatListReducer : ChatListReducer
    }
)

export default reducer;