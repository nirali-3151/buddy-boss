const conn = require('../../app/models/dbConnection')

exports.UpdateBlogDataController = async (req, res, next) => {
    const { id ,
    blog} = req.body

    console.log("req.body" ,req.body);
    const query = `UPDATE blog_management  SET blog = 'Featured' WHERE user_id =${id}`

    console.log("query" ,query);
    conn.query(query, (error, rese) => {
        console.log("rese",rese);
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}