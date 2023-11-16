import {
    GET_LOGIN_TOKEN
} from '../Actions/ActionTypes';

const initialState = {
    Token :[]
}

function LoginReducer(state = initialState, action) {

    switch (action.type) {
        case GET_LOGIN_TOKEN: {
            return {
                ...state,
                Token : action.payload.Token.token
            }
        }

        default:
            return state
    }

}

export default LoginReducer

