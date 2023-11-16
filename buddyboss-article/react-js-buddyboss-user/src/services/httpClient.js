import EnvironmentStore from "../stores/EnvironmentStore";

import React, { Component } from 'react'

class httpClient extends Component {
    static url(path) {
        var host = EnvironmentStore.getApiHost('test')
        return host + "/" + path
    }

    //register usert into application
    static async RegisterUser(path, newData) {
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

    //login user intto application
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
                    console.log("Data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get user Data after login
    static async getUserData(path, token) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
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

    //logout user from an application
    static async getLogOutUser(path, token) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                // body: JSON.stringify(token),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //blog management data
    //upload img in folder
    static async thumbNailImageAdd(path, formData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                body: formData,
            })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //create-blog in blog-management(curruently not in use)
    static async blogManagementCreateBlog(path, newData) {

        console.log("new Data is : ", newData);

        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                body: newData
            })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //view-blog-in blog-management
    static async blogManagementViewBlog(path) {
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

    //update blog in blog management
    static async blogManagementUpdateBlog(path, newData) {
        console.log("new Data is : ", newData);
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                body: newData
            })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //delete blog in blog management
    static async blogManagementDeleteBlog(path, newData) {
        console.log("new Dta is : ", newData);
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
                    console.log("Data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }


    //blog_catagory_data
    //view blog catagory data
    static async blogCatagoryViewBlog(path, newData) {
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

    //add new blog catagory data
    static async blogCatagoryCreateBlog(path, newData) {
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
                    console.log("Data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update new blog catagory data
    static async blogCatagoryUpdateBlog(path, newData) {
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
                    console.log("Data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //delete new blog catagory data
    static async blogCatagoryDeleteBlog(path, newData) {
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
                    console.log("Data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get Data of blog catagory in drop-down
    static async blogCatagoryDropDown(path) {
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


    //get all blog of perticular user at body component
    static async userAllBlogWithId(path, newData) {
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

    //get Main blog of perticular user at body component
    static async userMainBlogWithId(path, newData) {
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


    //get If there is exist main blog or not
    static async getMainBlogOfUser(path, newData) {
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

    //update blog if user select main blog and he already have main blog
    static async UpdateMainBlogOfUser(path, newData) {
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
}

export default httpClient