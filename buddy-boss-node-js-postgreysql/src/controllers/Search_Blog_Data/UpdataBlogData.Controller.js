const conn = require('../../app/models/dbConnection')
const jwt = require('jsonwebtoken')

exports.UpdateBlogDataController = async (req, res, next) => {
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

        const sql = `UPDATE blog_management  SET blog = 'Featured' WHERE user_id =${decoded.auth_id}`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data.rows, message: 'blog  list.' });
        });
    }
    catch (err) {
        next(err);
    }
    // const { id ,
    // blog} = req.body

    // const query = `UPDATE blog_management  SET blog = 'Featured' WHERE user_id =${id}`

    // conn.query(query, (error, rese) => {
    //     if (error) {
    //         res.json(error)
    //     }
    //     else {
    //         res.json(rese);
    //     }
    // })
}