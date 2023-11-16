var multer = require('multer')
const path = require('path');

const conn = require('../../app/models/dbConnection')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads1')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
exports.upload = multer({ storage: storage })


exports.thumbNail_Image_Upload_Controller = (async (req, res, next) => {
  const { title,
    description,
    blog_catagory_id,
    blog,user_id,
    created_at } = req.body

    console.log("req.body",req.body);

  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename)
    var imgsrc = req.file.filename
    var insertData = `INSERT INTO  blog_management(title,description,blog,catagory_id, thumbNail_img,user_id ,created_at ,updated_at) VALUES('${title}','${description}','${blog}',(SELECT blog_catagory_id FROM blog_catagory WHERE blog_catagory_id='${blog_catagory_id}') , '${imgsrc}' , '${user_id}' ,'${created_at}' ,'${created_at}')`

    console.log("insertData", insertData);
    conn.query(insertData, (err, result) => {
      if (err) throw err
      console.log("file uploaded")
    })
  }
}
)