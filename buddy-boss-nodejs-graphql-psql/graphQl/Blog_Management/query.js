const blog_management_type = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

const jwt = require('jsonwebtoken');

var ViewBlogManagementData =  {
    type: new graphql.GraphQLList(blog_management_type),
    resolve: (root, args, context, info) => {
        const theToken = context.headers.authorization

        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        return new Promise((resolve, reject) => {
            conn.query(`SELECT m.blog_manage_id , m.title , m.description,m.blog AS radio_btn_select,m.thumbnail_img AS thumbNail_img ,a.auth_id,c.catagory_name FROM blog_management AS m JOIN blog_catagory AS  c ON(c.blog_catagory_id = m.catagory_id ) JOIN auth_user AS a ON(m.user_id = ${decoded.auth_id} AND a.auth_id = m.user_id) ORDER BY blog_manage_id`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    },
}

module.exports = {ViewBlogManagementData}