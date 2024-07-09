const router = require("express").Router();
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

router.use(fileUpload());
router.post('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Save Single file
    const folder = `${path.resolve(__dirname,'../uploads')}`;
    if(!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    const saveTo = path.join(folder, `file-upload-${req.files.file.name}`);
    const sampleFile = req.files.file;
    console.log(sampleFile);
    // fs.createWriteStream(saveTo);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(saveTo, function(err) {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

module.exports = router;