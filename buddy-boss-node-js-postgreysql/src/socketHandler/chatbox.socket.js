const conn = require('../app/models/dbConnection')

module.exports = (io, socket) => {
    const joinRoom = function (data) {
        socket.join(data);
        console.log("User Joined Room: " + data);
    }

    const SendMessage = function (data) {
        console.log("send msg");
        const data1 = data.content
        const sql = `INSERT INTO  chat_room(msg  ,created_at ,send_to ,msg_from ) VALUES('${data1.msg}' , '${data1.created_at}' , '${data1.to}' ,'${data1.msg_from}')`
        conn.query(sql, function (err, data, fields) {
            if (err) throw err;
            return data
        });
        socket.to(data1.to).emit("receive_message", data.content);
    }

    socket.on("join_room", joinRoom)
    socket.on("send_message", SendMessage)
}