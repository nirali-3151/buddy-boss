import {
    GET_LOGIN_TOKEN
} from '../Actions/ActionTypes';

const initialState = {
    Token :[]
}

function LoginReducer(state = initialState, action) {

    switch (action.type) {
        case GET_LOGIN_TOKEN: {
            console.log("action.payload is: ", action.payload.Token.token);
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

