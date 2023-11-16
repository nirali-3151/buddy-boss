import {
    GET_BLOG_MANAGEMENT_DATA,
    GET_BLOG_MANAGEMENT_DATA_WITH_ID,
    EDIT_BLOG_MANAGEMENT_DATA,
    GET_AUTH_ID,
    ADD_BLOG_MANAGEMENT_DATA
} from "./ActionTypes";

export const getBlogManagementData= (payload) => {
    return {
        type: GET_BLOG_MANAGEMENT_DATA,
        payload
    };
};

export const getBlogManagementDataWithId= (payload) => {
    return {
        type:GET_BLOG_MANAGEMENT_DATA_WITH_ID,
        payload
    };
};


export const EditBlogManagementData= (payload) => {
    return {
        type:EDIT_BLOG_MANAGEMENT_DATA,
        payload
    };
};

export const AddBlogManagementData= (payload) => {
    return {
        type:ADD_BLOG_MANAGEMENT_DATA,
        payload
    };
};

export const getAuthId= (payload) => {
    return {
        type:GET_AUTH_ID,
        payload
    };
};