const conn = require('../../app/models/dbConnection')


exports.getTotalDataCountInCatagorySort = async (req, res, next) => {
    const { blog_catagory_id } = req.body
    var sql = `SELECT count(*) FROM blog_management WHERE blog_status_flag = true AND catagory_id = '${blog_catagory_id}'`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data.rows[0].count, message: ' all blog  list.' });
    });
}


const numPerPage = 5
exports.sortBlogDataByCatagory = async (req, res, next) => {
    const { blog_catagory_id } = req.body
    var sql = `SELECT manage.blog_manage_id ,manage.title ,manage.description,manage.blog AS radio_btn_select, manage.updated_at,manage.user_id,catagory.catagory_name,auth.name  ,manage.thumbNail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) WHERE blog_status_flag = true AND catagory_id = '${blog_catagory_id}' ORDER BY blog_manage_id DESC LIMIT ` + numPerPage
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data.rows, message: 'Blog Catagory list.' });
    })
}

exports.sortBlogDataByCatagoryNextPage = async (req, res, next) => {
    console.log("sortBlogDataByCatagoryNextPage");
    const { page,
        blog_catagory_id } = req.body

    console.log("req.body ", req.body);
    var skip = (page - 1) * numPerPage;
    var limit = skip + ',' + numPerPage;

    var sql = `SELECT manage.blog_manage_id ,manage.updated_at, manage.title ,manage.user_id, manage.description,catagory.catagory_name,auth.name ,manage.blog AS radio_btn_select ,manage.thumbNail_img FROM blog_management AS manage  JOIN blog_catagory AS catagory ON (manage.catagory_id=catagory.blog_catagory_id) JOIN auth_user AS auth ON(manage.user_id=auth.auth_id) WHERE blog_status_flag = true AND catagory_id = '${blog_catagory_id}' ORDER BY blog_manage_id DESC  LIMIT ${numPerPage} OFFSET ${skip} `

    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data.rows, message: ' all blog  list.' });
    });
} 