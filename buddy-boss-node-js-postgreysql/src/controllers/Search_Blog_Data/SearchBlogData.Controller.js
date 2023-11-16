const conn = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken')

exports.searchBlogDataController = async (req, res, next) => {
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
        const sql = `SELECT m.blog FROM blog_management AS m JOIN auth_user AS a ON(m.user_id = ${decoded.auth_id} AND m.user_id = a.auth_id) WHERE m.blog = 'Main'`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'data  list.' });
        });
    }
    catch (err) {
        next(err);
    }
    // const { id } = req.body

    // const query = `SELECT m.blog FROM blog_management AS m  WHERE m.blog = 'main'`

    // const query = `SELECT m.blog FROM blog_management AS m JOIN auth_user AS a ON(m.user_id = ${id} AND m.user_id = a.auth_id) WHERE m.blog = 'Main'`
    // conn.query(query, function (err, data, fields) {
    //     if (err) throw err;

    //     res.send({ error: false, data: data.rows, message: 'Data list.' });
    // }); 
}