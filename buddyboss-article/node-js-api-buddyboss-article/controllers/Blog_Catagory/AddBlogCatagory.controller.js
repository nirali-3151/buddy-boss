const conn = require('../../app/models/dbConnection')

exports.add_blog_catagory_controller = async (req, res, next) => {
    const { catagory_name,
        user_auth_id } = req.body

    console.log("req.body" ,req.body);
    const query = `INSERT INTO  blog_catagory(catagory_name ,user_auth_id) VALUES('${catagory_name}' , '${user_auth_id}')`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}