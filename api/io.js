const fs = require('fs')
const { promisify } = require('util')

fs.readFile('./test.js', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log('data', data, data.toString())
})
