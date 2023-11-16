const conn = require('../../app/models/dbConnection')

exports.view_blog_controller = async (req, res, next) => {
    // var sql = 'SELECT role.role_id , role.role_name, role.salary , department.department_name FROM role JOIN department ON (role.dep_id = department.department_id) ORDER BY role_id'

    var sql = 'SELECT manage.blog_manage_id , manage.title , manage.description,catagory.catagory_name ,manage.blog AS radio_btn_select ,manage.thumbNail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) ORDER BY blog_manage_id '
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'blog  list.' });
    }); 
}