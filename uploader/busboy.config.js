const busboy = require('busboy');
const fs = require('fs');
const path = require('path');

function configBusboy(req,res) {
    const bb = busboy({ headers: req.headers });
    let records = {};
    bb.on('file', (name, file, info) => {
        // console.log(name);
        // console.log(file);
        // console.log(info);
        const { filename, encoding, mimeType } = info;
        const folder = `${path.resolve(__dirname,'../uploads')}`;
        if(!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
        const saveTo = path.join(folder, `busboy-upload-${filename}`);
        file.pipe(fs.createWriteStream(saveTo));
        req.body.savedURL = saveTo;
        info.path = saveTo;
        records.file = info;

        // file.on('data', (data) => {console.log(data);})
        // file.on('close', () => { console.log(`File [${name}] done`);});
    });
    bb.on('field', (name, val, info) => {
        console.log(val);
        console.log(req.body);
        records.data = val;
      });

    bb.on('close', () => {
        console.log('Done parsing form!');
        // res.writeHead(303, { Connection: 'close', Location: '/' });
        // res.end();
         res.json(records);
      });

    req.pipe(bb); 
};

module.exports = configBusboy;