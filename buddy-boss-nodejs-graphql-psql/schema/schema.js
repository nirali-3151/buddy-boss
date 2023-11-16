const graphql = require('graphql')

//register user
const register_mutationType = require('../graphQl/auth_User/Register/mutation')

//login user
const Login_mutationType = require('../graphQl/auth_User/Login/mutation')

//get data in blogcatagory dropdown
const blogCatagoryQueryDD = require('../graphQl/DropDown/query')

//view all users at first page
const { getTotalCountOfBlog,
    viewUserFirstPage,
    viewUserNextPage } = require('../graphQl/View_All_User/query')

//get perticular user featured and main blog
const { userFeaturedBlog,
    userMainBlog } = require('../graphQl/User_All_blog_id/query')

//manage Blog Management Data
const { ViewBlogManagementData } = require('../graphQl/Blog_Management/query')
const { Create_new_blog_data,
    Update_new_blog_data,
    Delete_new_blog_data } = require('../graphQl/Blog_Management/mutation')

//Blog Catagory Data
const { ViewBlogCatagoryData } = require('../graphQl/Blog_Catagory/query')
const { Create_new_blog_catagory,
    Update_blog_catagory,
    Delete_blog_catagory } = require('../graphQl/Blog_Catagory/mutation')

//search if user have main blog or not
const {searchMainBlogTable} = require('../graphQl/Search_Blog_Data/query')
const {UpdateBlogDataToFeatured} = require('../graphQl/Search_Blog_Data/mutation')

const RootQuery = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        getTotalCountOfBlog,
        viewUserFirstPage,
        viewUserNextPage,

        blogCatagoryQueryDD,

        userFeaturedBlog,
        userMainBlog,

        ViewBlogManagementData,

        ViewBlogCatagoryData,

        searchMainBlogTable
    }
});


const MutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        register_mutationType,
        Login_mutationType,

        Create_new_blog_data,
        Update_new_blog_data,
        Delete_new_blog_data,

        Create_new_blog_catagory,
        Update_blog_catagory,
        Delete_blog_catagory,

        UpdateBlogDataToFeatured
    }
});

const schema = new graphql.GraphQLSchema({
    mutation: MutationType,
    query: RootQuery,
});

module.exports = schema