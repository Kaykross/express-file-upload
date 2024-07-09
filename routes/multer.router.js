const router = require("express").Router();
const multer = require('../uploader/multer.config');

router.post('/upload/multer',multer,async (req,res)=>{
   res.json({data:req.body, files:req.files})
  // busboy(req,res); 
    // console.log(req.body);
    // console.log(req.file);
    console.log(req.files);
    console.log('fired');  
});

module.exports = router;