import {
    GET_FIRST_PAGE_ALL_BLOG_DATA,
    GET_BLOG_DATA_PERTICULAR_ID,
    GET_USER_BLOG_DATA,
    GET_ALL_USER_BLOG_ID,
    GET_FIRST_PAGE_ALL_BLOG_DATA_NEXT_PAGE,
    GET_MAIN_USER_BLOG_DATA_PERTICULAR_ID,
    SET_VALUE_OF_MENU_FLAG,
    GET_TOTAL_COUNT_OF_BLOG
} from "./ActionTypes";

export const getTotalCountOfBlog= (payload) => {
    return {
        type:GET_TOTAL_COUNT_OF_BLOG ,
        payload
    };
};

export const getFirstPageAllBlogData= (payload) => {
    return {
        type:GET_FIRST_PAGE_ALL_BLOG_DATA ,
        payload
    };
};

export const getFirstPageAllBlogDataNextPage = (payload) => {
    return {
        type:GET_FIRST_PAGE_ALL_BLOG_DATA_NEXT_PAGE,
        payload
    };
};

export const getBlogDataPerticularId= (payload) => {
    return {
        type:GET_BLOG_DATA_PERTICULAR_ID,
        payload
    };
};

export const getMainUserBlogDataPerticularId= (payload) => {
    return {
        type:GET_MAIN_USER_BLOG_DATA_PERTICULAR_ID,
        payload
    };
};

export const getUserBlogData= (payload) => {
    return {
        type:GET_USER_BLOG_DATA,
        payload
    };
};

export const getAllUserBLog= (payload) => {
    return {
        type:GET_ALL_USER_BLOG_ID,
        payload
    };
};

export const setValueOfMenuFlag= (payload) => {
    return {
        type:SET_VALUE_OF_MENU_FLAG,
        payload
    };
};