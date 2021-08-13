const fs = require('fs');
const { Transform } = require('stream');

const rs = fs.createReadStream('./file.txt');

const newFile = fs.createWriteStream('./newFile.txt');

const uppercase = Transform({
  transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});

rs.pipe(uppercase).pipe(newFile);
