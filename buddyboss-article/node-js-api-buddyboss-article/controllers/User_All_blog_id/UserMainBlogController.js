const conn = require('../../app/models/dbConnection')


//get User Featured Blog
exports.userMainBlogWithIdController = async (req, res, next) => {
    const {auth_id}  = req.body

    var sql = `SELECT manage.blog_manage_id ,manage.updated_at,auth.name, manage.title , manage.description,manage.blog AS radio_btn_select ,manage.thumbNail_img,auth.auth_id,catagory.catagory_name FROM blog_management AS manage JOIN blog_catagory AS  catagory ON(catagory.blog_catagory_id = manage.catagory_id ) JOIN auth_user AS auth ON(auth.auth_id = (manage.user_id = ${auth_id})) WHERE blog = "Main" ORDER BY blog_manage_id`

    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log("data is : " ,data);
        res.send({ error: false, data: data, message: 'blog catagory list.' });
    }); 
}   