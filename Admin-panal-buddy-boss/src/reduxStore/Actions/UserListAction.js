import {
    GET_AVAILABLE_USER_LIST,
    GET_BLOG_DATA_PERTICULAR_ID,
    MSG_DATA_WITH_USER,
    MSG_DATA_FIRST_PAGE,
    GET_ONE_BLOG_ID,
    UPDATE_DATA_BLOG
} from "./ActionTypes";

export const ViewAvailableUsers= (payload) => {
    return {
        type:GET_AVAILABLE_USER_LIST ,
        payload
    };
};

export const getBlogDataPerticularId= (payload) => {
    return {
        type:GET_BLOG_DATA_PERTICULAR_ID,
        payload
    };
};

export const getOneBlogId= (payload) => {
    return {
        type:GET_ONE_BLOG_ID,
        payload
    };
};


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

//update data on status flag
export const updateBlogData= (payload) => {
    return {
        type:UPDATE_DATA_BLOG,
        payload
    };
};