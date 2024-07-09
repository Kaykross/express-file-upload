const router = require('express').Router();
const multer = require('./multer.router');
const busboy = require('./busboy.router');
const expressFileupload = require('./expressFileupload.router');


router.use(multer);
router.use(busboy);
router.use(expressFileupload);

module.exports = router;