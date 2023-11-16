const conn = require('../../../app/models/dbConnection')

exports.add_msg_controller = async (req, res, next) => {
    const { msg_from ,to ,msg ,created_at } = req.body
    try {
        const sql = `INSERT INTO  chat_room(msg  ,created_at ,send_to ,msg_from ) VALUES('${msg}' , '${created_at}' , '${to}' ,'${msg_from}')`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data, message: 'blog  list.' });
        });
    }
    catch (err) {
        next(err);
    }
}