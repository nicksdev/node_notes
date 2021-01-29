const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // Check for existing note with same title
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {

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


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if (notesToKeep.length !== notes.length) {
        console.log(chalk.bgGreen('Removing note ' + title))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue('Title: ') + title)
        console.log(chalk.green('Body: ') + note.body)
    } else {
        console.log(chalk.red('Note not found with title ') + title)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your notes:'))
    notes.forEach(note => console.log(chalk.yellow(note.title)));
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

// Function to load all current notes to memory
const loadNotes = () => {
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}



