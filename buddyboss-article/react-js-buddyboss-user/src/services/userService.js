import httpClient from "./httpClient";

import React, { Component } from 'react'

class UserService extends Component {

    //register usert into application
    static async RegisterUserList(newData) {
        let result = []
        try {
            let api_name = "auth-registration"

            console.log("api_name", api_name);
            console.log("new data in loginUserList", newData);
            result = await httpClient.RegisterUser(api_name, newData)

            console.log("result is : ", result);
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //login user into application
    static async loginUserList(newData) {
        let result = []
        try {
            let api_name = "admin-login"

            console.log("api_name", api_name);
            console.log("new data in loginUserList", newData);
            result = await httpClient.loginUser(api_name, newData)

            console.log("result is : ", result);
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    // get user Data after login
    static async getUserDataList(token) {
        let result = []
        try {
            let api_name = "home"
            result = await httpClient.getUserData(api_name, token)
        } catch (error) {
            console.log("get user data", error);
        }
        return result
    }

    //logout user from an application
    static async getLogOutUserList(token) {

        console.log("token is in getUserDataList ", token);
        let result = []
        try {
            let api_name = "admin-logout"

            console.log("api_name", api_name);
            result = await httpClient.getLogOutUser(api_name, token)

            console.log("result is : ", result);
        } catch (error) {
            console.log("get user data", error);
        }
        return result
    }

    //blog management
    //create-blog in blog-management(curruntely not in use)
    static async blogManagementCreateBlogList(newData) {
        // console.log("formData : " ,formData);
        let result = []
        try {
            let api_name = "blog-management-create-blog"
            result = await httpClient.blogManagementCreateBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //create new blog with image and data
    static async thumbNailImageAddList(formData) {
        let result = []
        try {
            let api_name = "upload-thumb-nail-image"
            result = await httpClient.thumbNailImageAdd(api_name, formData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //view new blog in blog management
    static async blogManagementViewBlogList(newData) {
        let result = []
        try {
            let api_name = "blog-management-view-blog"
            result = await httpClient.blogManagementViewBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //update new blog with image and data
    static async blogManagementUpdateBlogList(formData) {
        let result = []
        try {
            let api_name = "blog-management-update-blog"
            result = await httpClient.blogManagementUpdateBlog(api_name, formData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //delete blog with perticular id
    static async blogManagementDeleteBlogList(newData) {
        console.log("new data is :L ", newData);
        let result = []
        try {
            let api_name = "blog-management-delete-blog"
            result = await httpClient.blogManagementDeleteBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //blog catagory
    //view blog in blog-catagory
    static async blogCatagoryViewBlogList(newData) {
        let result = []
        try {
            let api_name = "blog-catagory-view-blog"
            result = await httpClient.blogCatagoryViewBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //create-blog in blog-catagory
    static async blogCatagoryCreateBlogList(newData) {
        let result = []
        try {
            let api_name = "blog-catagory-add-blog"
            result = await httpClient.blogCatagoryCreateBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //Update blog in blog catagory
    static async blogCatagoryUpdateBlogList(newData) {
        let result = []
        try {
            let api_name = `blog-catagory-update-blog/${newData.blog_catagory_id}`
            result = await httpClient.blogCatagoryUpdateBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //delete blog in blog catgory
    static async blogCatagoryDeleteBlogList(newData) {
        let result = []
        try {
            let api_name = "blog-catagory-delete-blog"
            result = await httpClient.blogCatagoryDeleteBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //get Data of blog catagory in drop-down
    static async blogCatagoryDropDownList() {
        let result = []
        try {
            let api_name = "catagory-drop-down-controller"
            result = await httpClient.blogCatagoryDropDown(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //view Data of blog of all the users at first page
    static async viewAllUsersBlogList() {
        let result = []
        try {
            let api_name = "view-all-user-blog-controller"
            result = await httpClient.viewAllUsersBlog(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //view Data of blog of all the users at next page
    static async viewAllUsersBlogNextPageList(newData) {
        let result = []
        try {
            let api_name = "view-all-user-blog-controller-next-page"
            result = await httpClient.viewAllUsersBlogNextPage(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //get all blog of perticular user at body component
    static async userAllBlogWithIdList(newData) {
        let result = []
        try {
            let api_name = "all-blog-with-id-controller"
            result = await httpClient.userAllBlogWithId(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //get Main blog of perticular user at body component
    static async userMainBlogWithIdList(newData) {
        let result = []
        try {
            let api_name = "main-blog-with-id-controller"
            result = await httpClient.userMainBlogWithId(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //get If there is exist main blog or not
    static async getMainBlogOfUserList(newData) {
        let result = []
        try {
            let api_name = "search-blog-data-controller"
            result = await httpClient.getMainBlogOfUser(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //update blog if user select main blog and he already have main blog
    static async UpdateMainBlogOfUserList(newData) {
        let result = []
        try {
            let api_name = "update-blog-data-controller"
            result = await httpClient.UpdateMainBlogOfUser(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }
}

export default UserService;