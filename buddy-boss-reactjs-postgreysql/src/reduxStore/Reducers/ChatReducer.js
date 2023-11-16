import {
    MSG_DATA_WITH_USER,
    MSG_DATA_FIRST_PAGE
} from '../Actions/ActionTypes';

const initialState = {
    msgs: []
}

function ChatListReducer(state = initialState, action) {

    switch (action.type) {

        //get msg data next page
        case MSG_DATA_WITH_USER: {
            console.log("msgs are : ", action.payload);
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

export default ChatListReducer

