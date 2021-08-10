const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('readable', () => {
  let data = rs.read();
  while (data !== null) {
    console.log('reading data:', data);
    data = rs.read();
  }
});

rs.on('end', () => {
  console.log('no more data');
});
