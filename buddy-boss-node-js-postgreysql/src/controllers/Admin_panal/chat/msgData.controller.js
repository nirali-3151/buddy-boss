const conn = require('../../../app/models/dbConnection')

exports.chatMessageDataController = async (req, res, next) => {
    const { auth_id } = req.body
    let sql = `SELECT c.msg , c.send_to , c.msg_from , c.created_at , c.chat_id FROM chat_room AS c WHERE (send_to='${auth_id}' OR msg_from = '${auth_id}')`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data.rows, message: 'message list' });
    })
}