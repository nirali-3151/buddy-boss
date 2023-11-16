import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import FirstPageReducer from './FirstPageReducer'
import UserListReducer from "./UserListReducer"
 
const reducer = combineReducers(
    {
        LoginReducer:LoginReducer,
        FirstPageReducer:FirstPageReducer,
        UserListReducer:UserListReducer
    }
)

export default reducer;