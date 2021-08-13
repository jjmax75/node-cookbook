const fs = require('fs');
const { promisify } = require('util');
const { pipeline, Transform } = require('stream');

const promisePipeline = promisify(pipeline);

const uppercase = new Transform({
  transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});

async function run() {
  await promisePipeline(
    fs.createReadStream('./file.txt'),
    uppercase,
    fs.createWriteStream('./newFile.txt')
  );
  console.log('pipeline succeeded')
}

run().catch(console.error);
