const path = require('path');

const fs = require('fs');

exports.ImageUploadController = (async (req, res, next) => {
    var TempFile = req.files.upload;
    var TempPathfile = TempFile.path;

    const targetPathUrl = path.join(__dirname, "../../uploads/" + TempFile.name);

    console.log("tempFLie" ,TempFile);
    console.log("target url" ,targetPathUrl );

    if (path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg") {

        fs.rename(TempPathfile, targetPathUrl, err => {

            res.status(200).json({
                uploaded: true,
                url: `${TempFile.originalFilename}`
            });
            // console.log("${TempFile.originalFilename}",`${TempFile.originalFilename}`);

            // console.log("TempFile.originalFilename",TempFile.originalFilename);
            if (err) return console.log(err);
        })
    }
})
