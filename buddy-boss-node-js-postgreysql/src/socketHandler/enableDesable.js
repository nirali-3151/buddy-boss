const conn = require('../app/models/dbConnection')

module.exports = (io, socket) => {

    const ToggleButton = function (data) {
        const blog_data = data.blog_manage_id
        socket.emit("set_value_btn", data);
    }

    socket.on("toggle_btn", ToggleButton)
}