const router = require("express").Router();
const multer = require('../uploader/multer.config');

router.post('/upload',multer,async (req,res)=>{
  // busboy(req,res); 
    // console.log(req.body);
    // console.log(req.file);
    console.log('fired');  
});

module.exports = router;