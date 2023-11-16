import EnvironmentStore from "../stores/EnvironmentStore";

import React, { Component } from 'react'

class httpClient extends Component {
    static url(path) {
        var host = EnvironmentStore.getApiHost('test')
        return host + "/" + path
    }

     //login Admin intto application
     static async loginUser(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update blog status
    static async updateBlogStatus(path , newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body : JSON.stringify(newData)
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get message list
    static async getMessages(path , newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body : JSON.stringify(newData)
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get user data
    static async GetUserData(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get user data
    static async GetPerticularUserBlog(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newData)
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }


    //view Data of blog of all the users at first page
    static async viewAllUsersBlog(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //view Data of blog of all the users at next page
    static async viewAllUsersBlogNextPage(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get total number of data count
    static async getTotalDataCountList(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }
}

export default httpClient