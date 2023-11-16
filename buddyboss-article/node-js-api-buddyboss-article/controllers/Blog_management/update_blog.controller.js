const conn = require('../../app/models/dbConnection')

exports.update_blog_controller = async (req, res, next) => {
    const { title,
        description,
        blog_catagory_id,
        blog ,
        updated_at} = req.body

        console.log("req.body" ,req.body);

    if (!req.file) {
        const query = `UPDATE blog_management SET title = ('${title}') ,description = ('${description}') , blog = ('${blog}') ,updated_at =  ('${updated_at}'),catagory_id = (SELECT blog_catagory_id FROM blog_catagory WHERE catagory_name='${blog_catagory_id}') WHERE blog_manage_id = ${req.body.blog_manage_id}`
        conn.query(query, (error, rese) => {

            if (error) {
                res.json(error)
            }
            else {
                console.log("rese", rese);
                res.json(rese);
            }
        })

    } else {
        const query = `UPDATE blog_management SET title = ('${title}') ,description = ('${description}') , blog = ('${blog}'), ,updated_at =  ('${updated_at}') , thumbNail_img = ("${req.file.filename}"),catagory_id = (SELECT blog_catagory_id FROM blog_catagory WHERE catagory_name='${blog_catagory_id}') WHERE blog_manage_id = ${req.body.blog_manage_id}`
        conn.query(query, (error, rese) => {
            if (error) {
                res.json(error)
            }
            else {
                res.json(rese);
            }
        })
    }
}