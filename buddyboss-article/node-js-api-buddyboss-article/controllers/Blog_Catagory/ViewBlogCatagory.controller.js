const conn = require('../../app/models/dbConnection')

exports.ViewBlogCatagoryController = async (req, res, next) => {
    // var sql = 'SELECT * FROM blog_catagory'
    const {auth_id}  = req.body
    // var sql = `SELECT catagory.blog_catagory_id,catagory.catagory_name ,auth.auth_id FROM blog_catagory AS catagory JOIN auth_user AS auth ON(catagory.user_auth_id=(auth.auth_id = ${auth_id}))`
    const sql1 =`SELECT catagory.blog_catagory_id,catagory.catagory_name ,catagory.user_auth_id FROM blog_catagory AS catagory  JOIN auth_user AS auth WHERE (auth.auth_id = (catagory.user_auth_id = ${auth_id}))`

    // console.log("sql1" ,sql1);
    // var sql = `SELECT catagory.blog_catagory_id,catagory.catagory_name ,auth.auth_id FROM blog_catagory AS catagory JOIN auth_user AS auth ON(catagory.user_auth_id=(auth.auth_id = ${auth_id}))`
    conn.query(sql1, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'blog catagory list.' });
    }); 
}   