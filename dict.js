const yargs = require("yargs");
const cmd = require("./dict-commands");

// Display definitions & examples of a word
if (!yargs.argv._[0] && (yargs.argv.word || yargs.argv.w))
    cmd.getFullDictionaryDetails(yargs.argv.word ? yargs.argv.word : yargs.argv.w);
// Display definitions & examples of word of the day
else if (!yargs.argv._[0] && Object.keys(yargs.argv).length === 2)
    cmd.getWordOfDay();
else
    yargs.strict();


// Display definitions of a word
yargs.command({
    command: 'def',
    describe: ' Display definitions of a word',
    builder: {
        word: {
            describe: 'word from a dictionary',
            demandOption: true,
            type: 'string',
            alias: 'w'
        }
    },
    handler: function (argv) {
        cmd.getDefinitionsByWord(argv.word)
    }
});

// Display examples of a word
yargs.command({
    command: 'ex',
    describe: ' Display examples of a word',
    builder: {
        word: {
            describe: 'word from a dictionary',
            demandOption: true,
            type: 'string',
            alias: 'w'
        }
    },
    handler: function (argv) {
        cmd.getExamplesByWord(argv.word)
    }
});

// Display definitions & examples of a word
yargs.command({
    command: 'dict',
    describe: ' Display definitions & examples of a word',
    default: false,
    builder: {
        word: {
            describe: 'word from a dictionary',
            demandOption: true,
            type: 'string',
            alias: 'w'
        }
    },
    handler: function (argv) {
        cmd.getFullDictionaryDetails(argv.word)
    }
});

// Word Game
yargs.command({
    command: 'play',
    describe: ' play word game',
    handler: function (argv) {
        cmd.playWordGame();
    }
});





yargs.parse();
