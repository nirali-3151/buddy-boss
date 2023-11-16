import EnvironmentStore from "../stores/EnvironmentStore";

import React, { Component } from 'react'

// const url = "http://localhost:8082/graphql"
const url = "https://node-js-graphql-api.herokuapp.com/graphql"

class httpClient extends Component {

    //view Data of first five blog of all the users at first page
    static async viewAllUsersBlog() {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    viewUserFirstPage {
                    title,
                    description,
                    thumbnail_img,
                    name,
                    catagory_name,
                    updated_at,
                    user_id
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data.viewUserFirstPage
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //view Data of blog of all the users at next page
    static async viewAllUsersBlogNextPage(newData) {
        const page = newData.page
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    viewUserNextPage(page : "${page}") {
                    title,
                    description,
                    thumbnail_img,
                    name,
                    catagory_name,
                    updated_at,
                    user_id
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data.viewUserNextPage
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get total number of data count
    static async getTotalDataCount() {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    getTotalCountOfBlog
                }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //login user intto application
    static async loginUser(newData) {
        const email = newData.email
        const password = newData.password
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: ` mutation
                {
                    Login_mutationType(email : "${email}" , password: "${password}")
                    {
                        Token,
                        msg
                    }
                }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    // console.log();
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //register user into application
    static async RegisterUser(newData) {
        const email = newData.email
        const password = newData.password
        const name = newData.name
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: ` mutation
                {
                    register_mutationType(name: "${name}",email : "${email}" , password: "${password}")
                    {
                        msg
                    }
                }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    // console.log();
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //blog-management
    // get user Data after login
    static async getUserData(Token) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    ViewBlogManagementData {
                        title,
                        description,
                        thumbnail_img,
                        catagory_name,
                        updated_at,
                        radio_btn_select,
                        blog_manage_id
                    }
                }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get If there is exist main blog or not
    static async getMainBlogOfUser(Token) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `query {
                        searchMainBlogTable {
                            blog
                        }
                    }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update blog if user select main blog and he already have main blog
    static async UpdateMainBlogOfUser(Token) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `mutation {
                        UpdateBlogDataToFeatured 
                    }`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    // get catagory data in dropdown
    static async blogCatagoryDropDown() {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    blogCatagoryQueryDD{
                        catagory_name,
                        blog_catagory_id
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    // create new Blog
    static async createNewBlog(Token, newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `mutation {
                    Create_new_blog_data
                    (title : "${newData.title}" ,
                    blog : "${newData.blog}" ,
                    description  :"${newData.description}",
                    blog_catagory_id : "${newData.blog_catagory_id}" ,
                    created_at : "${newData.created_at}" ,
                    file : "${newData.file}" )
                {
                    title
                }}`,

                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update blog in blog management
    static async blogManagementUpdateBlog(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:
                    JSON.stringify({
                        query: `
                    mutation{
                        Update_new_blog_data(title : "${newData.title}"  ,
                        description :"${newData.description}",
                        blog :   "${newData.blog}",
                        blog_catagory_id :"${newData.blog_catagory_id}",
                        updated_at : "${newData.updated_at}",
                        thumb_nail_img  : "${newData.thumb_nail_img} ",
                        blog_manage_id:"${newData.blog_manage_id}" ,
                     )
                }`,
                        variables: {},
                    }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //delete blog in blog management
    static async blogManagementDeleteBlog(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                mutation{
                    Delete_new_blog_data(blog_manage_id : "${newData.blog_manage_id}" )}
            `,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //blog-catagory operation
    //view blog catagory
    static async blogCatagoryViewBlog(Token) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    ViewBlogCatagoryData{
                        blog_catagory_id,
                        catagory_name,
                        user_auth_id
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //add new blog catagory data
    static async blogCatagoryCreateBlog(Token, newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${Token}`
                },
                body: JSON.stringify({
                    query: `
                mutation{
                    Create_new_blog_catagory(catagory_name : "${newData.catagory_name}")
                {
                    blog_catagory_id
                }
            }
            `,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update blog catagory data
    static async blogCatagoryUpdateBlog(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                mutation{
                    Update_blog_catagory(blog_catagory_id : "${newData.blog_catagory_id}" ,catagory_name : "${newData.catagory_name}" )}
            `,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //delete new blog catagory data
    static async blogCatagoryDeleteBlog(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                mutation{
                    Delete_blog_catagory(blog_catagory_id : "${newData.blog_catagory_id}" )}
            `,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //view user all blog with id
    //get Main blog of perticular user at body component
    static async userMainBlogWithId(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    userMainBlog(auth_id : "${newData.auth_id}"){
                        title,
                        description,
                        thumbnail_img,
                        name,
                        catagory_name,  
                        updated_at
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get Featured blog of perticular user at body component
    static async userFeaturedBlogWithId(newData) {
        try {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                query 
                {
                    userFeaturedBlog(auth_id : "${newData.auth_id}"){
                        title,
                        description,
                        thumbnail_img,
                        name,
                        catagory_name,
                        updated_at
                }}`,
                    variables: {},
                }),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }
}

export default httpClient