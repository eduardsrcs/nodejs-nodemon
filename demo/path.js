const path = require('path') // do not necessary to install, because it is native module

console.log("File name:", path.basename(__filename))
console.log("Directory name:", path.dirname(__filename))
console.log("Extension name:", path.extname(__filename))

console.log("Parse:", path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))