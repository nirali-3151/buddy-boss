// const {Client} = require("pg");
// const dbConfig = require("../config/db.config")

// const db_connection = new Client({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     port :dbConfig.PORT,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
//   })
//   .on("error", (err) => {
//     console.log("Failed to connect to Database - ", err);
//   });

// module.exports = db_connection;

require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  //  ssl:
   ssl: 
    isProduction ? {rejectUnauthorized: false} : false
      
    // process.env.DATABASE_URL ? true : false
  // ssl: isProduction,
})

module.exports =  pool 