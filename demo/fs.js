const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   // in nodejs in async operations first parameter of callback func is error
//   // if success then err is null :)
//   if(err) {
//     throw err
//   }

//   console.log('Created map')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

fs.appendFile(filePath, 'Helo, NodeJS\n', (err) => {
    if(err) {
      throw err
    }

    console.log('Created file')
})

fs.readFile(filePath, (err, content) => {
  if(err) {
    throw err
  }
  const data = Buffer.from(content)
  console.log(data.toString())
})


fs.readFile(filePath, 'utf-8', (err, content) => {
  if(err) {
    throw err
  }
  console.log(content)
})

