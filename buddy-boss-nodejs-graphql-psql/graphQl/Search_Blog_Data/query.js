const main_blog_check_type = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

const jwt = require('jsonwebtoken');

//searching blog_manage table user has a main blog ao not
var searchMainBlogTable =  {
    type: new graphql.GraphQLList(main_blog_check_type),
    resolve: (root, args, context, info) => {
        const theToken = context.headers.authorization

        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        return new Promise((resolve, reject) => {
            conn.query(`SELECT m.blog FROM blog_management AS m JOIN auth_user AS a ON(m.user_id = ${decoded.auth_id} AND m.user_id = a.auth_id) WHERE m.blog = 'Main'`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    },
}

module.exports = {searchMainBlogTable}