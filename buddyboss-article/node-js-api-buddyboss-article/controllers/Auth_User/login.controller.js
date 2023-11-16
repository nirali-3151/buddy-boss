const db = require('../../app/models/dbConnection');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.adminLoginController = async (req, res, next) => {
    db.query(
        `SELECT * FROM auth_user WHERE email = ${db.escape(req.body.email)};`,
        (err, result) => {
          // user does not exists
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
          if (!result.length) {
            return res.status(401).send({
              msg: 'Email or password is incorrect!'
            });
          }
          // check password
          bcrypt.compare(
            req.body.password,
            result[0]['password'],
            (bErr, bResult) => {
              // wrong password
              if (bErr) {
                throw bErr;
                return res.status(401).send({
                  msg: 'Email or password is incorrect!'
                });
              }
              if (bResult) {
                const token = jwt.sign({auth_id:result[0].auth_id},'the-super-strong-secrect');
                return res.status(200).send({
                  msg: 'Logged in!',
                  token,
                  user: result[0]
                });
              }
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              });
            }
          );
        })
}



// exports.adminLoginController = async (request, response) => {
//     console.log("request.session.userId", request.session.userId);
//     if (request.session.userId) {
//         response.json({ result: 'ERROR', message: 'User already logged in.' });
//     } else {
//         const user = {
//             email: request.body.admin_email,
//             password: request.body.password
//         };
//         const connection = await conn.createConnection();
//         try {
//             const result = await connection.query(`
//             SELECT admin_id FROM admin WHERE
//             admin_email  =${mysql.escape(user.email)}
//                     AND password=${mysql.escape(user.password)}
//                 LIMIT 1
//             `);
//             if (result.length > 0) {
//                 const user = result[0];
//                 request.session.userId = user.admin_id;
//                 response.json({ result: 'SUCCESS', userId: user.admin_id });
//             } else {
//                 response.json({ result: 'ERROR', message: 'Indicated email or/and password are not correct.' });
//             }
//         } catch (e) {
//             console.error(e);
//             response.json({ result: 'ERROR', message: 'Request operation error.' });
//         } finally {
//             await connection.end();
//         }
//     }
// }

// exports.adminLoginController = async (req, res, next) => {
//     let email = req.body.email;
//     let password = req.body.password

//     if (email && password) {
//         conn.query('SELECT password FROM auth_user WHERE email = ?', [email],
//             (error, results, fields) => {
//                 console.log("results : " ,results);
//                 if (bcrypt.compareSync(password, results[0].password)) {
//                     req.session.loggedin = true;
//                     req.session.email = email;
//                     // res.redirect('/home');
//                     res.send("Successful");
//                 } else {
//                     res.send('Incorrect Email and/or Password!');
//                 }
//                 res.end();
//             });
//     } else {
//         res.send('Please enter Username and Password!');
//         res.end();
//     }

//     console.log("email " , email);
//     // console.log(" req.session.loggedin", req.session.loggedin);

//     // const query = 'SELECT * FROM auth_user WHERE email = ?'
//     // conn.query(query, [email], function (error, results, fields) {
//     //     if (error) throw error;
//     //     if (results.length > 0) {
//     //         bcrypt.compare(password, results[0].password).then((result) => {
//     //             if (result) {
//     //                 res.send('help');

//     //                 req.session.loggedin = true;
//     //                 req.session.email = email;
//     //             }
//     //         })
//     //     } else {
//     //         res.send('Incorrect email and/or Password!');
//     //     }
//     //     res.end();
//     // });
// }    