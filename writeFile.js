const fs = require('fs')

function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name} () {

        }`
  )
  fs.writeFileSync(
    `./${name}.spec.js`,
    `function ${name} () {

        }`
  )
  fs.writeFileSync(
    `./${name}.stories.js`,
    `function ${name} () {

        }`
  )
}
module.exports = writeFile
