const fs = require('fs');
const { getTree } = require('../dist/jsx-to-simple-ast.cjs.js');

const content = fs.readFileSync(__dirname + '/Welcome/index.js', 'utf8');
const result = getTree(content);
console.log(JSON.stringify(result));
