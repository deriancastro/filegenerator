const fs = require('fs')

function writeFile(name, fileType, fileString) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`
}
module.exports = writeFile
