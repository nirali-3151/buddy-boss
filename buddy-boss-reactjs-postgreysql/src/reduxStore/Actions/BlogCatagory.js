import {
    GET_BLOG_CATAGORY_DATA,
    EDIT_BLOG_CATAGORY_DATA
} from "./ActionTypes";

export const getBlogCatagoryData= (payload) => {
    return {
        type: GET_BLOG_CATAGORY_DATA,
        payload
    };
};

export const editBlogCatagoryData= (payload) => {
    return {
        type: EDIT_BLOG_CATAGORY_DATA,
        payload
    };
};
