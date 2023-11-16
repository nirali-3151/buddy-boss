const conn = require('../../app/models/dbConnection')

const numPerPage =5
exports.viewAllUsersBlogController = async (req, res, next) => {
    var sql = `SELECT manage.blog_manage_id , manage.updated_at,manage.title ,manage.user_id, manage.description,catagory.catagory_name,auth.name ,manage.blog AS radio_btn_select ,manage.thumbNail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) ORDER BY blog_manage_id LIMIT ` + numPerPage
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log("data" , data);
        res.send({ error: false, data: data, message: ' all blog  list.' });
    }); 
}   


exports.viewAllUsersBlogControllerNextPage = async (req, res, next) => {

    const {page} = req.body
    var skip = (page-1) * numPerPage;
    var limit = skip + ',' + numPerPage;

    var sql = `SELECT manage.blog_manage_id ,manage.updated_at, manage.title ,manage.user_id, manage.description,catagory.catagory_name,auth.name ,manage.blog AS radio_btn_select ,manage.thumbNail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) ORDER BY blog_manage_id  LIMIT ` + limit
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: ' all blog  list.' });
    }); 
} 
