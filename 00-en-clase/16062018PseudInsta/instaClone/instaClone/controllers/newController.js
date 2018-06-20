const self = {};
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

//const app = express();
 
// default options
//app.use(fileUpload());

self.fileUpload = function(req, res, next){
  limits: { fileSize: 50 * 1024 * 1024 }
};
 

self.uploadPost = function(req, res, next) {
  if (!req.files)
    
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  console.log(sampleFile);

  var fileName = req.files.sampleFile.name;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + '../public/images/uploads/' + fileName, function(err) {
    
    if (err)
      
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });

};

// app.listen(4000, function () {
//   console.log('Example app listening on port 4000!');
// });

module.exports = self;