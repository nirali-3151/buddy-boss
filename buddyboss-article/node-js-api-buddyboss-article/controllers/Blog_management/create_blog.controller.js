const conn = require('../../app/models/dbConnection')

exports.create_blog_controller = async (req, res, next) => {
    // const { title,
    //     description,
    //     blog_catagory_id,
    //     blog } = req.body


    console.log("req.body is : ",JSON.stringify(req.body));
    console.log("req.file.filename", req.file);
    console.log("req.title" ,req.title);

    // const query = `INSERT INTO  blog_management(title,description,blog,catagory_id ) VALUES('${title}','${description}','${blog}',(SELECT blog_catagory_id FROM blog_catagory WHERE blog_catagory_id='${blog_catagory_id}'))`

    // // console.log("query", query);
    // conn.query(query, (error, rese) => {
    //     if (error) {
    //         res.json(error)
    //     }
    //     else {
    //         res.json(rese);
    //     }
    // })
}