const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0) {
        console.log(chalk.blue.inverse("Your notes:"));
        notes.forEach((note) => console.log(note.title));
    } else {
        console.log(chalk.red.iverse("There are not notes yet!"));
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote) {
        notes.push({
            title, body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("Note saved successfully!"));
    } else {
        console.log(chalk.red.inverse("Note's title already exists"));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note) {
        console.log(chalk.blue.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note note found!"));
    }
}

//ToThink: double filter auchh!!
const removeNote = (title) => {
    const notes = loadNotes();
    const findNotes = notes.filter((note) => note.title === title);
    if(findNotes.length > 0) {
        newNotes = notes.filter((note) => note.title !== title);
        saveNotes(newNotes);
        console.log(chalk.green.inverse("Note removed successfully!"));
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
}

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync("notes.json").toString();
        return JSON.parse(dataJSON);  
    } catch (e) {
        return []
    }     
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
}