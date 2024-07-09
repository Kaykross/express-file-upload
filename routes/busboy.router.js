const router = require('express').Router();
const busboy = require('../uploader/busboy.config');

router.post('/upload/busboy',async (req,res)=>{
  busboy(req,res); 
    // console.log(req.body);
    // console.log(req.file);
    console.log('fired');  
});

module.exports = router;