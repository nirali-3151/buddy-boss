const bcrypt = require('bcryptjs')
const Login_User = require('./types')
const graphql = require('graphql')
const db = require('../../../app/models/dbConnection')
const jwt = require('jsonwebtoken');

var Login_mutationType = {
    type: Login_User,
    args: {
        email: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        password: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
    },
    resolve: (root, { name, email, password }) => {
        return new Promise(async (resolve, reject) => {
            const data = await db.query(`SELECT * FROM auth_user WHERE email= $1;`, [email]); //Checking if user already exists

            const arr = data.rows;
            if (!arr.length) {
                resolve({
                    msg: 'User is not registered, Sign Up first',
                });
            }
            else {
                bcrypt.compare(password, arr[0].password, (err, result) => { //Comparing the hashed password
                    if (err)
                        reject({ msg: "Server error" });

                    else if (result === true) { //Checking if credentials match
                        const token = jwt.sign({ auth_id: arr[0].auth_id }, 'the-super-strong-secrect');
                        resolve({
                            msg: 'Logged in!',
                            Token: token,
                        });
                    }
                    else {
                        if (!result) {
                            resolve({
                                msg: 'Enter correct password!',
                            });
                            
                        }
                    }
                });
            }
        })
    }
}

module.exports = Login_mutationType
