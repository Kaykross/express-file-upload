const express = require("express");
const cors = require('cors');
const postRoutes = require('./routes/post.routes');

// const expressUpload = require('./uploader/expressFileupload.config');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public/')))

// expressUpload(app);

app.get('/form',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public/form.html'));
})

app.use( postRoutes)

app.listen(port,console.log("running on port 3000"));