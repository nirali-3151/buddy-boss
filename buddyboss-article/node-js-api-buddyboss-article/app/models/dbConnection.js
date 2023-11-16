// const mysql = require("mysql");
// const dbConfig = require("../config/db.config")

// const config = {
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// }

// const createConnection = () => {
//   const connection = mysql.createConnection(config);

//   const query = sql => {
//     return new Promise((resolve, reject) => {
//       connection.query(sql, (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };

//   const end = () => {
//     return new Promise((resolve, reject) => {
//       connection.end(error => {
//         if (error) {
//           reject();
//         } else {
//           resolve();
//         }
//       })
//     });
//   };

//   return new Promise((resolve, reject) => {
//     connection.connect(error => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve({ query, end });
//       }
//     });
//   })
// };

// module.exports = {
//   createConnection
// };


const mysql = require("mysql");
const dbConfig = require("../config/db.config")

const db_connection = mysql
  .createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;