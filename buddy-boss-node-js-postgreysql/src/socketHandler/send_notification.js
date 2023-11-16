const conn = require('../app/models/dbConnection')

module.exports = (io, socket) => {
    const sendNotification = function (data) {
        console.log("data is : " ,data);
        socket.to(data.auth_id).emit("send_to_user", data);
    }

    socket.on("sendnotification", sendNotification)
}