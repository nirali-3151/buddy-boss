const conn = require('../../../app/models/dbConnection')

exports.getUserBlogDataByIdController = async (req, res, next) => {
    const {auth_id } = req.body
    var sql = `SELECT m.blog_manage_id , m.title , m.description,m.blog AS radio_btn_select,m.thumbnail_img AS thumbNail_img ,m.blog_status_flag ,a.auth_id,a.name , c.catagory_name FROM blog_management AS m JOIN blog_catagory AS  c ON(c.blog_catagory_id = m.catagory_id ) JOIN auth_user AS a ON(m.user_id = ${auth_id} AND a.auth_id = m.user_id) ORDER BY blog_manage_id DESC`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data.rows, message: 'blog  list.' });
    });
}