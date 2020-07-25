// (function(exports, require, module, __dirname, __filename){
// const chalk = require('chalk')
// const text = require('./text')

// console.log(chalk.blue(text))

// console.log(__dirname)
// console.log(__filename)
// })

const http = require('http')
const fs = require('fs')
const path = require('path')

// creating server...
const server = http.createServer((req, res)=> {
/* // PART ONE...
  // console.log(req.url)
  if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if(err) {
        throw(err)
      }
      // writing headers
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      // sending res
      res.end(data)
    })
  } else if(req.url === '/contacts'){
    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
      if(err) {
        throw(err)
      }
      // writing headers
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      // sending res
      res.end(data)
    })
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    })
    res.end('Not found')
  }
*/

  // PART TWO!!!
  const urls = {
    contact: 'contact.html'
  }
  console.log(urls)

  let filePath = path.join(__dirname, "public", req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch(ext){
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if(!ext){
    filePath += '.html'
  }
  console.log(filePath)

  fs.readFile(filePath, (err, content) => {
    if(err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('err')
        } else {
          res.writeHead(404, {
            'Content-type': 'text/html'
          })
          res.end(data)
        }
      })
    }
    else {
      res.writeHead(200, {
        'Content-type': contentType
      })
      res.end(content)
    }
  })

  // res.end(filePath.split('/').pop())
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})