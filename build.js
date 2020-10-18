const htmlnano = require('htmlnano')
const fs = require('fs')

const options = {}
const html = fs.readFileSync('./index.html')
htmlnano
  .process(html)
  .then(function (result) {
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist')
    }
    fs.writeFileSync('./dist/index.html', result.html)
    console.log(`Build index.html to /dist`)
  })
  .catch(function (err) {
    console.error(err)
  })
