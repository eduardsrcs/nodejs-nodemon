const os = require('os')

console.log('Platform:',os.platform())
console.log('Architecture',os.arch())
console.log('CPU, cores',os.cpus().length)
console.log('free memory:',(os.freemem() / (1024**2)).toFixed(2), 'MB')
console.log('total memory:',(os.totalmem() / (1024**2)).toFixed(2), 'MB')

console.log('Homedir:',os.homedir())
console.log('hostname:',os.hostname())
console.log('Uptime:',os.uptime())