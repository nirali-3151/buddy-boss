const Catagory_type = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

const jwt = require('jsonwebtoken');

//view Blog Catagory Data
var ViewBlogCatagoryData =  {
    type: new graphql.GraphQLList(Catagory_type),
    resolve: (root, args, context, info) => {
        const theToken = context.headers.authorization

        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM blog_catagory AS c INNER JOIN auth_user AS a ON(c.user_auth_id = ${decoded.auth_id} AND a.auth_id = c.user_auth_id )`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    },
}

module.exports = {ViewBlogCatagoryData}