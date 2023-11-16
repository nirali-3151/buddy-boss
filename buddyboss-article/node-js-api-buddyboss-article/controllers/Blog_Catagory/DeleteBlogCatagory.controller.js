const conn = require('../../app/models/dbConnection')

exports.delete_blog_catagory_controller = async (req, res, next) => {
    const { blog_catagory_id } = req.body

    const query = `DELETE FROM  blog_catagory WHERE blog_catagory_id = ${blog_catagory_id}`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}