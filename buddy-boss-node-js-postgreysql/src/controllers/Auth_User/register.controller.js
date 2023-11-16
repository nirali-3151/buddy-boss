const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../app/models/dbConnection')

exports.registerController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const data = await db.query(`SELECT * FROM auth_user WHERE email= $1;`, [email]); //Checking if user already exists
        const arr = data.rows;
        if (arr.length != 0) {
            return res.status(400).json({
                msg: "Email already there, No need to register again.",
            });
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err)
                    res.status(err).json({
                        error: "Server error",
                    });
                const user = {
                    name,
                    email,
                    password: hash,
                };
                var flag = 1; //Declaring a flag

                //Inserting data into the database

                db
                    .query(`INSERT INTO auth_user (name, email, password) VALUES ($1,$2,$3);`, [user.name, user.email, user.password], (err) => {

                        if (err) {
                            console.error(err);
                            return res.status(500).json({
                                error: "Database error"
                            })
                        }
                        else {
                            res.status(200).send({ msg: 'User added to database' });
                        }
                    })
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!", //Database connection error
        });
    };
}