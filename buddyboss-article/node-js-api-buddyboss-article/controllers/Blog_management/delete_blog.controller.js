const conn = require('../../app/models/dbConnection')

exports.delete_blog_controller = async (req, res, next) => {
    console.log("delete_blog_controller");
    console.log("req.body" , req.body);
    const {blog_manage_id} = req.body
    const query = `DELETE FROM  blog_management WHERE blog_manage_id = ${blog_manage_id}`
    console.log("query" ,query);
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}