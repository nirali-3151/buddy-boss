const viewAllUserType = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

const numPerPage = 5

//get total number of blog count
var getTotalCountOfBlog = {
    type: graphql.GraphQLID,
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT count(*) FROM blog_management`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows[0].count);
            });
        });
    },
}


//get first five data of blog
var viewUserFirstPage = {
    type: new graphql.GraphQLList(viewAllUserType),
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT manage.blog_manage_id ,manage.title ,manage.description,manage.blog AS radio_btn_select, manage.updated_at,manage.user_id,catagory.catagory_name,auth.name  ,manage.thumbnail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) ORDER BY blog_manage_id LIMIT ` + numPerPage, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    }
}

// get blog data with pagination
var viewUserNextPage = {
    type: new graphql.GraphQLList(viewAllUserType),
    args: {
        page: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },

    resolve: (root, { page }, context, info) => {
        const skip = (page - 1) * numPerPage;
        return new Promise((resolve, reject) => {
            conn.query(`SELECT manage.blog_manage_id ,manage.title ,manage.description,manage.blog AS radio_btn_select, manage.updated_at,manage.user_id,catagory.catagory_name,auth.name  ,manage.thumbnail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) ORDER BY blog_manage_id LIMIT ${numPerPage} OFFSET ${skip}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    }
}

module.exports = {getTotalCountOfBlog , viewUserFirstPage , viewUserNextPage}