const Catagory_type = require('./types')
const graphql = require('graphql')
const db = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken');

//create new blog catagory
var Create_new_blog_catagory = {
    type: Catagory_type,
    args: {
        catagory_name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
    },
    resolve: (root, { catagory_name }, context, info) => {
        const theToken = context.headers.authorization
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        return new Promise(async (resolve, reject) => {
            db.query(`INSERT INTO  blog_catagory(catagory_name ,user_auth_id) VALUES('${catagory_name}','${decoded.auth_id}') RETURNING blog_catagory_id`, function (err, rows) {
                if (err) {
                    reject([]); 
                }

                db.query(`SELECT * from blog_catagory WHERE blog_catagory_id = '${rows.rows[0].blog_catagory_id}'`, (err, rows) => {
                    const Data = rows.rows[0]
                    resolve({
                        blog_catagory_id: Data.blog_catagory_id,
                        catagory_name:Data.catagory_name,
                    });
                });
            });
        });
    }
}

//update blog catagory
var Update_blog_catagory = {
    type: graphql.GraphQLString,
    args: {
        catagory_name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        blog_catagory_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { catagory_name , blog_catagory_id}, context, info) => {
        return new Promise(async (resolve, reject) => {
            db.query(`UPDATE blog_catagory SET catagory_name = ( '${catagory_name}') WHERE blog_catagory_id = ${blog_catagory_id}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(`user ${blog_catagory_id} updated`);
            });
        });
    }
}

//delete blog catagory
var Delete_blog_catagory = {
    type: graphql.GraphQLString,
    args: {
        blog_catagory_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { blog_catagory_id }, context, info) => {
        return new Promise(async (resolve, reject) => {
            db.query(`DELETE FROM  blog_catagory WHERE blog_catagory_id = ${blog_catagory_id}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(`user ${blog_catagory_id} deleted`);
            });
        });
    }
}

module.exports = { Create_new_blog_catagory , Update_blog_catagory ,Delete_blog_catagory }
