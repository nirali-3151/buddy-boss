const conn = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken')


exports.add_blog_catagory_controller = async (req, res, next) => {
    const { catagory_name } = req.body
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
        const sql = `INSERT INTO  blog_catagory(catagory_name ,user_auth_id) VALUES('${catagory_name}','${decoded.auth_id}')`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'blog  list.' });
        });
    }
    catch (err) {
        next(err);
    }
}