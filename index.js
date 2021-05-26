const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Hello, how are you', answer => {
  console.log(answer)
  rl.close()
})

/*const functionName = process.argv[2] ?? 'myfunction'

writeFile(functionName)

// console.log(process.argv)

[
    '/opt/homebrew/lib/node_modules/node/bin/node',
    '/Users/macfrei/neuefische/coaches/filegenerator/index.js',
    'multiply'
]
*/
