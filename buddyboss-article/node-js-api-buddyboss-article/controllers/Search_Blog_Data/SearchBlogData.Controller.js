const conn = require('../../app/models/dbConnection')

exports.searchBlogDataController = async (req, res, next) => {
    const { id } = req.body

    const query = `SELECT manage.blog FROM blog_management AS manage JOIN auth_user AS auth ON(auth.auth_id = (manage.user_id = ${id})) WHERE manage.blog = "Main"`

    conn.query(query, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'Data list.' });
    }); 
    // conn.query(query, (error, rese) => {
    //     console.log("rese",rese[0].blog);
    //     if (error) {
    //         res.json(error)
    //     }
    //     else {
    //         res.json(rese[0].blog);
    //     }
    // })
}