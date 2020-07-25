# Node.JS

[minin](https://www.youtube.com/watch?v=3aGSqasVPsI)

Works on system, uses same Javascript engine as Chrome - V8.

### Npm
NodeJs package manager, controls packages and configs in the project as such runs commands.

#### Common commands:

- '''npm init''' - initializes projects, creates *package.json* file.
- ```npm i packet name```, ```npm install packet name``` - adds a packet to project, ```-D``` configures this packet to **development mode**

**Node.JS** supports modules, so we can import and export modules.

To import module:

```const chalk = require('chalk')```

this imports module from **chalk** packet and assigns it to variable *chalk*.

```const text = require('./text')``` - this imports *text* from **text.js** file in current directory.

in *text.js* write:

```
const text = 'Hello Node.JS from text.js'

module.exports = text
```

*index.js*:

```
const chalk = require('chalk')
const text = require('./text')

console.log(chalk.blue(text))
```

then in terminal: ```node index.js```

and we get blue printed text.

then, create file *demo/path.js* and run it by using command **./demo/path**

after, see file **fs**, then **os**, then **events**

and then, comment all in **index.js** and let's talk about http module. So, before:

```
// (function(exports, require, module, __dirname, __filename){
// const chalk = require('chalk')
// const text = require('./text')

// console.log(chalk.blue(text))

// console.log(__dirname)
// console.log(__filename)
// })
```

after:

```
const http = require('http')

// creating server...
const server = http.createServer((req, res)=> {
  // console.log(req)
  res.end('<h1>Hello world</h1>')
})

server.listen(3000, () => {
  console.log('Server is up...')
})
```

don't forget to install nodemon:

```
npm i -D nodemon
```

add scripts to *package.json*:

```
"start": "node index.js",
"dev": "nodemon index.js"
```

this works fine, but... **mkdir public** and index.html inside it...
