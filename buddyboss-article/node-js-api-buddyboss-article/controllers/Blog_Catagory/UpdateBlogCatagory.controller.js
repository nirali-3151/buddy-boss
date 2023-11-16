const conn = require('../../app/models/dbConnection')

exports.update_blog_catagory_controller = async (req, res, next) => {

    const { catagory_name } = req.body

    const query = `UPDATE blog_catagory SET catagory_name = ( '${catagory_name}') WHERE blog_catagory_id = ${req.params.id}`

    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }   
        else {
            res.json(rese);
        }
    })
}