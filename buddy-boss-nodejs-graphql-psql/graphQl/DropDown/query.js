const blog_catagory_dropdown = require('./types')
const graphql = require("graphql");
const conn = require('../../app/models/dbConnection')

var blogCatagoryQueryDD = {
    type: new graphql.GraphQLList(blog_catagory_dropdown),
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * from blog_catagory `, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(rows.rows);
            });
        });
    }
}

module.exports = blogCatagoryQueryDD