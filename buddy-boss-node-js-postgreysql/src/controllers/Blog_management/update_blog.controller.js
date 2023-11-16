const conn = require('../../app/models/dbConnection')

exports.update_blog_controller = async (req, res, next) => {
    const { title,
        description,
        blog_catagory_id,
        blog,
        updated_at, thumb_nail_img } = req.body
    const query = `UPDATE blog_management SET title = ('${title}') ,description = ('${description}') ,thumbnail_img=('${thumb_nail_img}'), blog = ('${blog}') ,updated_at =  ('${updated_at}'),catagory_id = (SELECT blog_catagory_id FROM blog_catagory WHERE catagory_name='${blog_catagory_id}') WHERE blog_manage_id = ${req.body.blog_manage_id}`
    conn.query(query, (error, rese) => {

        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}