const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
var cors = require("cors");

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const port = process.env.PORT || 8083;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.json());


// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Sserver Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.use('/graphql', graphqlHTTP((req,res)=>{
 res.set('Access-Control-Allow-Origin', '*');
  return {
    schema: schema,
    pretty: true,
  }
}));

app.listen(port, () => console.log('Server is running on port 8083'));  