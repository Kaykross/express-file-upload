const multer = require('multer');
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.body);
        const dir = `${path.resolve(__dirname,'../uploads')}`;
        fs.mkdirSync(dir, { recursive: true })
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage }).any();

  module.exports = upload;