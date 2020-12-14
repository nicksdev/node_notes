
const getNotes = require('./notes.js')

// assign command line input to variable 'command'
const command = process.argv[2]


// Perform actions based on command line input
if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}


