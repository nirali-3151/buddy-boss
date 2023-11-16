const bcrypt = require('bcryptjs')
const Register_User = require('./types')
const graphql = require('graphql')
const db = require('../../../app/models/dbConnection')

var mutationType = {
    type: Register_User,
    args: {
        name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        email: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        password: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
    },
    resolve: (root, { name, email, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await db.query(`SELECT * FROM auth_user WHERE email= $1;`, [email]); //Checking if user already exists
                const arr = data.rows;
                if (arr.length !== 0)
                    resolve({
                        msg:"Email already there, No need to register again."
                    });
                else {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err)
                            reject(null);

                        const user = {
                            name,
                            email,
                            password: hash,
                        };

                        db.query(`INSERT INTO auth_user (name, email, password) VALUES ($1,$2,$3) RETURNING auth_id;`, [user.name, user.email, user.password], (err, result) => {
                            if (err) {
                                reject(null);
                            }
                            resolve({
                                auth_id: result.rows[0].auth_id,
                                name: name,
                                email: email,
                                password: password,
                                msg:"The user has been registerd with us!"
                            });
                        })
                    });
                }
            }
            catch (err) {
                console.log("err is : ", err);
                throw new Error(err)
            };
        })
    }
}

module.exports = mutationType
