const conn = require('../../app/models/dbConnection')

exports.catagory_drop_down_controller = async (req, res, next) => {
    let sql = `SELECT *  FROM blog_catagory`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'Blog Catagory list.' });
    })
    }