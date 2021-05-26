const writeFile = require('./writeFile')
const functionName = process.argv[2] ?? 'myfunction'

writeFile(functionName)

// console.log(process.argv)
/*
[
    '/opt/homebrew/lib/node_modules/node/bin/node',
    '/Users/macfrei/neuefische/coaches/filegenerator/index.js',
    'multiply'
]
*/
