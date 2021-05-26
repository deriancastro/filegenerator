const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which function and file would you to create? Please separate by comma: ',
  answer => {
    const functions = splitArray(answer)
    functions.map(functionName => {
      writeFile(functionName.trim())
      rl.close()
    })
  }
)

function splitArray(answer) {
  const newArray = answer.split(',')
  return newArray
}

/*const functionName = process.argv[2] ?? 'myfunction'

writeFile(functionName)

// console.log(process.argv)

[
    '/opt/homebrew/lib/node_modules/node/bin/node',
    '/Users/macfrei/neuefische/coaches/filegenerator/index.js',
    'multiply'
]
*/
