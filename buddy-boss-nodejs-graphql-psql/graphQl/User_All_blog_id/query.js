const userAllBlogWithIdType = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

//get perticular user featured blog
var userFeaturedBlog = {
    type: new graphql.GraphQLList(userAllBlogWithIdType),
    args: {
        auth_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { auth_id }, context, info) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT manage.blog_manage_id , manage.title ,manage.updated_at ,manage.description,manage.blog AS radio_btn_select ,manage.thumbnail_img,auth.auth_id,auth.name ,catagory.catagory_name FROM blog_management AS manage JOIN blog_catagory AS  catagory ON(catagory.blog_catagory_id = manage.catagory_id ) JOIN auth_user AS auth ON(manage.user_id = ${auth_id} AND manage.user_id =auth.auth_id) WHERE blog = 'Featured' ORDER BY blog_manage_id`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    },
}

//get perticular user main blog
var userMainBlog = {
    type: new graphql.GraphQLList(userAllBlogWithIdType),
    args: {
        auth_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { auth_id }, context, info) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT manage.blog_manage_id , manage.title ,manage.updated_at ,manage.description,manage.blog AS radio_btn_select ,manage.thumbnail_img,auth.auth_id,auth.name ,catagory.catagory_name FROM blog_management AS manage JOIN blog_catagory AS  catagory ON(catagory.blog_catagory_id = manage.catagory_id ) JOIN auth_user AS auth ON(manage.user_id = ${auth_id} AND manage.user_id =auth.auth_id) WHERE blog = 'Main' ORDER BY blog_manage_id`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    },
}


module.exports = { userFeaturedBlog, userMainBlog }