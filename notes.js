const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes.....'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    // Check for existing note with same title
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')

    } else {
        console.log('Note title taken!')
    }

}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    
    if (notesToKeep.length !== notes.length) {
        console.log(chalk.bgGreen('Removing note ' + title))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Function to load all current notes to memory
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // if error due to notes.json not existing yet, return an empty array
        return[]
    }
    
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}



