const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken');


exports.getUserDataController = async (req, res, next) => {
    try {

        if (
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ) {
            return res.status(422).json({
                message: "Please provide the token",
            });
        }

        

        const theToken = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        // var sql = `SELECT m.blog_manage_id , m.title , m.description,m.blog AS radio_btn_select,m.thumbnail_img AS thumbNail_img ,a.auth_id,c.catagory_name FROM blog_management AS m JOIN blog_catagory AS  c ON(c.blog_catagory_id = m.catagory_id ) JOIN auth_user AS a ON(c.user_auth_id = ${decoded.auth_id} AND a.auth_id = c.user_auth_id) ORDER BY blog_manage_id`
        var sql = `SELECT m.blog_manage_id , m.title ,m.blog_status_flag, m.description,m.blog AS radio_btn_select,m.thumbnail_img AS thumbNail_img ,a.auth_id,c.catagory_name FROM blog_management AS m JOIN blog_catagory AS  c ON(c.blog_catagory_id = m.catagory_id ) JOIN auth_user AS a ON(m.user_id = ${decoded.auth_id} AND a.auth_id = m.user_id) ORDER BY blog_manage_id DESC`

        // console.log("sql " ,sql);
        conn.query(sql,function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'blog  list.' });
        });
    }
    catch (err) {
        next(err);
    }
}


// exports.ViewBlogCatagoryController = async (req, res, next) => {
//     var sql = `SELECT catagory.blog_catagory_id,catagory.catagory_name ,auth.auth_id FROM blog_catagory AS catagory  JOIN auth_user AS auth ON(catagory.user_auth_id=(auth.auth_id = ${decoded.auth_id}))`
//     conn.query(sql, function (err, data, fields) {
//         if (err) throw err;
//         res.send({ error: false, data: data, message: 'blog catagory list.' });
//     });
// }

// exports.getUserDataController = async (req, res, next) => {

//     if (req.session.loggedin) {
//         res.send('Welcome back, ' + req.session.email + '!');
//     } else {
//         res.send('Please login to view this page!');
//     }
//     res.end();
// }