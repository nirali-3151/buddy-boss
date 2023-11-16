import {
    GET_LOGIN_TOKEN,
} from "./ActionTypes";

export const getLoginToken= (payload) => {
    return {
        type: GET_LOGIN_TOKEN,
        payload
    };
};
