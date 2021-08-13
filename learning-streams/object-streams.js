const { Transform } = require('stream');
const { stringify } = require('ndjson');

const Name = Transform({
  objectMode: true,
  transform: ({ forename, surname }, encoding, cb) => {
    cb(null, { name: `${forename} ${surname}`});
  }
});

Name.pipe(stringify()).pipe(process.stdout);

Name.write({ forename: 'John', surname: 'Murphy' });
Name.write({ forename: 'Phil', surname: 'Mitchell' });
Name.write({ forename: 'Herbert', surname: 'O\'Rahilly' });
