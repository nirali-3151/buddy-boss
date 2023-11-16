const conn = require('../../../app/models/dbConnection')

exports.updateBlogStatusController = async (req, res, next) => {
    const { blog_manage_id } = req.body
    const query = `UPDATE blog_management SET blog_status_flag = NOT blog_status_flag WHERE blog_manage_id = ${blog_manage_id}`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}