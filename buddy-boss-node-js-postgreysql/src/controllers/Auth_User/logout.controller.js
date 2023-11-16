const conn = require('../../app/models/dbConnection');
const jwt = require('jsonwebtoken');


exports.adminLogoutController = async (req, res ,next) => {
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
        // console.log("decoded.iat", decoded.iat);
        // console.log("decoded.exp",decoded.exp);

        // decoded.exp = decoded.iat

        // console.log("decoded.exp outside",decoded.exp);

        // const decoded =jwt.destroy(theToken ,'the-super-strong-secrect')

        // console.log("decoded" ,decoded);

        const sql = `SELECT auth_id FROM auth_user WHERE auth_id= ${decoded.auth_id}`

        conn.query(sql, (error, rese) => {
            if (error) {
                res.json(error)
            }
            else {
                const token = jwt.sign({auth_id:rese[0].auth_id},'the-super-strong-secrect',{ expiresIn: '1h' });
                return res.status(200).send({
                    msg: 'Logged out!',
                    token
                  });
            }
        })
    }
    catch (err) {
        next(err);
    }
}


// exports.adminLogoutController = async (req, res) => {
//     console.log("request.session.email",req.session.email);
//     if (req.session.email) {
//         delete req.session.email;
//         res.json({ result: 'SUCCESS' });
//     } else {
//         res.json({ result: 'ERROR', message: 'User is not logged in.' });
//     }
// }