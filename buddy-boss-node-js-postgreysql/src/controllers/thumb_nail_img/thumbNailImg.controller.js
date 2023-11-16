// const express = require("express");
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");
// const cloud = require("../../app/models/cloudinaryConnection")
// const conn = require('../../app/models/dbConnection')

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Buddy-Boss",
//   },
// });

// exports.upload = multer({ storage: storage });

// exports.thumbNail_Image_Upload_Controller = (async (req, res, next) => {
//   const { title,
//     description,
//     blog_catagory_id,
//     blog, user_id,
//     created_at } = req.body

//   if (!req.file) {
//     console.log("No file upload");
//   } else {
//     console.log(req.file.filename)
//     var imgsrc = req.file.path

//     var insertData = `INSERT INTO  blog_management(title,description,blog,catagory_id, thumbnail_img,user_id ,created_at ,updated_at) VALUES('${title}','${description}','${blog}',(SELECT blog_catagory_id FROM blog_catagory WHERE blog_catagory_id='${blog_catagory_id}') , '${imgsrc}' , '${user_id}' ,'${created_at}' ,'${created_at}')`

//     conn.query(insertData, (err, result) => {
//       if (err) throw err
//       console.log("file uploaded")
//     })
//   }
// })



var multer = require('multer')
const path = require('path');
const jwt = require('jsonwebtoken')

const conn = require('../../app/models/dbConnection')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../uploads1/'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }
})
// }

exports.upload = multer({ storage: storage })


exports.thumbNail_Image_Upload_Controller = (async (req, res, next) => {
  const { title,
    description,
    blog_catagory_id,
    blog,
    created_at,
    file } = req.body

  console.log("req.body", req.body);
  try {

    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer') ||
      !req.headers.authorization.split(' ')[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }

    const theToken = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

    const sql = `INSERT INTO  blog_management(title,description,blog,catagory_id, thumbnail_img,user_id ,created_at ,updated_at) VALUES('${title}','${description}','${blog}',(SELECT blog_catagory_id FROM blog_catagory WHERE blog_catagory_id='${blog_catagory_id}') , '${file}' , '${decoded.auth_id}' ,'${created_at}' ,'${created_at}')`
    conn.query(sql, function (err, data, fields) {
      if (err) throw err;
      res.send({ error: false, data: data.rows, message: 'blog  list.' });
    });
  }
  catch (err) {
    next(err);
  }
}
)