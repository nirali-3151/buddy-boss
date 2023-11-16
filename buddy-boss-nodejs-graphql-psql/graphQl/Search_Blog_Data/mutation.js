const Catagory_type = require('./types')
const graphql = require('graphql')
const db = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken');

//update all main feild to featured
var UpdateBlogDataToFeatured = {
    type: graphql.GraphQLString,

    resolve: (root,args, context, info) => {
        const theToken = context.headers.authorization

        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
        return new Promise(async (resolve, reject) => {
            db.query(`UPDATE blog_management  SET blog = 'Featured' WHERE user_id =${decoded.auth_id}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(`user blog updated to featured `);
            });
        });
    }
}

module.exports = {UpdateBlogDataToFeatured }
