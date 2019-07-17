const { listNotes, addNote, removeNote, readNote } = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

// console.log(process.argv)

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Title for the note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body for the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: ({title, body}) => addNote(title, body)
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Title for the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: ({title}) => removeNote(title)
})

yargs.command({
    command: "list",
    describe: "List notes",
    handler: () => listNotes()
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Title for the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: ({title}) => readNote(title)
})

yargs.parse();