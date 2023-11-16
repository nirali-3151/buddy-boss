import httpClient from "./httpClient";

import React, { Component } from 'react'

class UserService extends Component {

    //login user into application
    static async loginUserList(newData) {
        let result = []
        try {
            let api_name = "admin-side-login"
            result = await httpClient.loginUser(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //update blog status
    static async updateBlogStatusList(newData) {
        let result = []
        try {
            let api_name = "update-blog-status"
            result = await httpClient.updateBlogStatus(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //get message list
    static async getMessagesList(newData) {
        let result = []
        try {
            let api_name = "chat-data"
            result = await httpClient.getMessages(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //get user Data list
    static async GetUserDataList() {
        let result = []
        try {
            let api_name = "get-user-list"
            result = await httpClient.GetUserData(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //get perticular user Blog list 
    static async GetPerticularUserBlogList(newData) {
        let result = []
        try {
            let api_name = "get-user-blog-data-by-id"
            result = await httpClient.GetPerticularUserBlog(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //view Data of blog of all the users at first page
    static async viewAllUsersBlogList() {
        let result = []
        try {
            let api_name = "view-all-user-blog-controller-admin"
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
            let api_name = "view-all-user-blog-controller-next-page-admin"
            result = await httpClient.viewAllUsersBlogNextPage(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //view Data of blog of all the users at next page
    static async getTotalDataCountList() {
        let result = []
        try {
            let api_name = "get-total-data-count"
            result = await httpClient.getTotalDataCountList(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }
}
export default UserService;