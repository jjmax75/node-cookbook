const fs = require('fs');
const { promisify } = require('util');

const promiseRead = promisify(fs.readFile);

const file = promiseRead('./file.txt');

file.then(data => console.log(data.toString()));
