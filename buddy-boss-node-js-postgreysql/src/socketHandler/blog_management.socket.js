module.exports = (io, socket) => {
    const deleteBlogByUser = function(data) {
        socket.emit("get_data_after_delete" ,data )
    }

    socket.on("delete_blog", deleteBlogByUser)
}