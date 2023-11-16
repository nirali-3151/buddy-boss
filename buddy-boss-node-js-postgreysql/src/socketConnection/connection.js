// const joinRoom = require('../socketHandler/messageHandler')
const {io } = require('../server')
const blogMangement = require('../socketHandler/blog_management.socket')
const chatBlox = require('../socketHandler/chatbox.socket')
const enableDisable = require('../socketHandler/enableDesable')
const notification = require('../socketHandler/send_notification')
 
const onConnection = (socket) => {
    blogMangement(io ,socket),
    chatBlox(io ,socket),
    enableDisable(io ,socket),
    notification(io ,socket)
}

module.exports = onConnection