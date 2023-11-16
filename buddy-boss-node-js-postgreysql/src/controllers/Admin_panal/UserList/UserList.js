const conn = require('../../../app/models/dbConnection')

exports.get_user_list_controller = async (req, res, next) => {
    let sql = `SELECT *  FROM auth_user`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'Blog Catagory list.' });
    })
    }