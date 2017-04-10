const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
const S3 = new AWS.S3();

const key = "image.png";

S3.putObject({
  Key: key,
  Bucket: 'nodeschool-5',
  ContentType: 'image/png',
  // Body: ...
}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(`Uploaded to: https://s3.eu-central-1.amazonaws.com/nodeschool-5/${key}`); // success
});
