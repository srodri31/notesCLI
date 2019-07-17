# notesCLI
Command line app to manage notes

# How to start

Run the following command after cloning the repo

```sh
$ npm install
```

# How it works

Listing notes
Run the list command to see all notes' titles

```sh
$ node app.js list
```

Adding notes
Run the add command with the title and body options

```sh
$ node app.js add --title="Note's title" --body="Note's body"
```

Removing notes
Run the remove command with the title option

```sh
$ node app.js remove --title="Note's title"
```

Reading notes
Run the read command with the title option to print its body

```sh
$ node app.js add --title="Note's title"
```

# Help

You can always run all the commands with the help option to get more information

```sh
$ node app.js add --help
```