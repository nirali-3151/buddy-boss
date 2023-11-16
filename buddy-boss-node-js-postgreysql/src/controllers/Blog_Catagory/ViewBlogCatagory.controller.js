const conn = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken')
exports.ViewBlogCatagoryController = async (req, res, next) => {
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
        const sql = `SELECT * FROM blog_catagory AS c INNER JOIN auth_user AS a ON(c.user_auth_id = ${decoded.auth_id} AND a.auth_id = c.user_auth_id )`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'blog  list.' });
        });
    }
    catch (err) {
        next(err);
    }
}   