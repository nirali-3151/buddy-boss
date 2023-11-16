const express = require('express');
const routes = require('./app/routes/routes');
const session = require('express-session');
const bodyParser = require("body-parser");
const http = require("http");
const webpush = require('web-push')
var cors = require("cors");
const dotenv = require('dotenv')

dotenv.config()

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

//socket modulas
const { Server } = require("socket.io");
const onConnection = require('./socketConnection/connection')

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.json());

//set socket server
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on("connection", onConnection);

module.exports = { io };

//get image path
app.use('/user-dashboard/blog-management', express.static("uploads"));
app.use('/user-profile-blog', express.static("uploads"));
app.use(express.static("uploads"));
app.use(express.static("uploads1"));
app.use('/user-dashboard', express.static("uploads1"));
app.use('/user-profile-blog', express.static("uploads1"));
app.use('/user-dashboard/blog-management', express.static("uploads1"))

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});


//web push notifications
app.post('/notifications/subscribe', (req, res) => {
  const subscription = req.body

  console.log("subscription" , subscription)

  const payload = JSON.stringify({
    title: 'Hello!',
    body: 'It works.',
  })

  webpush.sendNotification(subscription, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});

app.use(routes);

server.listen(port, () => console.log(`Server is running on port ${port}`));