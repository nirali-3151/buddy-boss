const path = require('path');

const fs = require('fs');

exports.ImageUploadController = (async (req, res, next) => {
    var TempFile = req.files.upload;
    var TempPathfile = TempFile.path;

    const targetPathUrl = path.join(__dirname, "../../uploads/" + TempFile.name);

    // console.log("");

    if (path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg") {

        fs.rename(TempPathfile, targetPathUrl, err => {

            res.status(200).json({
                uploaded: true,
                url: `https://buddy-boss-nodejs.herokuapp.com/${TempFile.originalFilename}`
            });
            // console.log("${TempFile.originalFilename}",`${TempFile.originalFilename}`);

            // console.log("TempFile.originalFilename",TempFile.originalFilename);
            if (err) return console.log(err);
        })
    }
})
