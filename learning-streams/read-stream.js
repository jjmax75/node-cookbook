const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('data', (data) => {
  console.log('read chunk:', data.toString());
});

rs.on('end', () => {
  console.log('end of data');
});
