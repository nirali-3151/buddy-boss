const express = require('express');
const routes = require('./app/routes/routes');
const session = require('express-session');
var path = require('path')

var publicDir = require('path').join(__dirname,'/uploads1'); 



const app = express();
var cors = require("cors");

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());

app.use('/user-dashboard/blog-management', express.static("uploads"));

app.use(express.static("uploads1"));
app.use('/user-dashboard' ,express.static("uploads1"));
app.use('/user-profile-blog' ,express.static("uploads1"));
app.use('/user-dashboard/blog-management' ,express.static("uploads1"));


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

app.use(routes);

app.listen(port, () => console.log('Server is running on port 8080'));