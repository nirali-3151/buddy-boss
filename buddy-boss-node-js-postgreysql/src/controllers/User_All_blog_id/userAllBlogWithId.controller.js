const conn = require('../../app/models/dbConnection')


//get User Featured Blog
exports.userAllBlogWithIdController = async (req, res, next) => {
    const {auth_id}  = req.body
    var sql = `SELECT manage.blog_manage_id , manage.title ,manage.updated_at ,manage.description,manage.blog AS radio_btn_select ,manage.thumbnail_img,auth.auth_id,auth.name ,catagory.catagory_name FROM blog_management AS manage JOIN blog_catagory AS  catagory ON(catagory.blog_catagory_id = manage.catagory_id ) JOIN auth_user AS auth ON(manage.user_id = ${auth_id} AND manage.user_id =auth.auth_id) WHERE blog = 'Featured' AND blog_status_flag = true ORDER BY blog_manage_id`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;

        res.send({ error: false, data: data.rows, message: 'blog catagory list.' });
    }); 
}   