const blog_management_type = require('./types')
const graphql = require('graphql')
const db = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken');

//create new blog 
var Create_new_blog_data = {
    type: blog_management_type,
    args: {
        title: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        description: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        blog_catagory_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        blog: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        created_at: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        file: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
    },
    resolve: (root, { title, description, blog_catagory_id, blog, created_at, file }, context, info) => {
        const theToken = context.headers.authorization
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
        return new Promise(async (resolve, reject) => {
            console.log("create neew blog");
            db.query(`INSERT INTO  blog_management(title,description,blog,catagory_id, thumbnail_img,user_id ,created_at ,updated_at) VALUES('${title}','${description}','${blog}',(SELECT blog_catagory_id FROM blog_catagory WHERE blog_catagory_id='${blog_catagory_id}') , '${file}' , '${decoded.auth_id}' ,'${created_at}' ,'${created_at}') RETURNING blog_manage_id `, function (err, rows) {
                if (err) {
                    reject([]);
                }

                db.query(`SELECT * from blog_management WHERE blog_manage_id = '${rows.rows[0].blog_manage_id}'`, (err, rows) => {
                    const Data = rows.rows[0]
                    resolve({
                        title: Data.title,
                        description: Data.description,
                        blog: Data.blog,
                        created_at: Data.created_at,
                        updated_at: Data.updated_at,
                        catagory_id: Data.catagory_id,
                        user_id: Data.user_id,
                        blog_manage_id: Data.blog_manage_id,
                        thumbnail_img: Data.thumbnail_img
                    });
                });
            });
        });
    }
}

//update blog 
var Update_new_blog_data = {
    type: graphql.GraphQLString,
    args: {
        title: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        description: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        blog_catagory_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        blog: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        updated_at: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        thumb_nail_img: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        blog_manage_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { title, description, blog_catagory_id, blog, updated_at, thumb_nail_img, blog_manage_id }, context, info) => {
      console.log("---------Update_new_blog_data--------");
        return new Promise(async (resolve, reject) => {
            db.query(`UPDATE blog_management SET title = ('${title}') ,description = ('${description}') ,thumbnail_img=('${thumb_nail_img}'), blog = ('${blog}') ,updated_at =  ('${updated_at}'),catagory_id = (SELECT blog_catagory_id FROM blog_catagory WHERE catagory_name='${blog_catagory_id}') WHERE blog_manage_id = ${blog_manage_id}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(`user ${blog_manage_id} updated`);
            });
        });
    }
}

//delete blog 
var Delete_new_blog_data = {
    type: graphql.GraphQLString,
    args: {
        blog_manage_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, {blog_manage_id }, context, info) => {
        return new Promise(async (resolve, reject) => {
            db.query(`DELETE FROM  blog_management WHERE blog_manage_id = ${blog_manage_id}`, function (err, rows) {
                if (err) {
                    reject([]);
                }
                resolve(`user ${blog_manage_id} deleted`);
            });
        });
    }
}

module.exports = { Create_new_blog_data, Update_new_blog_data, Delete_new_blog_data }
