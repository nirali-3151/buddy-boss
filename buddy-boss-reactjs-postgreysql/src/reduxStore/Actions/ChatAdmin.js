import {
    MSG_DATA_WITH_USER,
    MSG_DATA_FIRST_PAGE
} from "./ActionTypes";

export const msgDataFirstPage= (payload) => {
    return {
        type:MSG_DATA_FIRST_PAGE,
        payload
    };
};


export const msgDataWithUser= (payload) => {
    return {
        type:MSG_DATA_WITH_USER,
        payload
    };
};
