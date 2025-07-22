const readline = require('readline');
const AutoCompleteTrieClass = require('./project');
const trie = new AutoCompleteTrieClass();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Command > '
});

console.log("=== AutoComplete Trie Console ===");
console.log("Type help for commands");
rl.prompt();

rl.on('line', (line) => {
    const [command, arg] = line.trim().split(' ');

    switch (command) {
        case 'add':
            trie.addWord(arg);
            console.log(`Added "${arg}" to dictionary`);
            break;
        case 'find':
            const exists = trie.findWord(arg);
            console.log(exists ? `"${arg}" exists in dictionary` : `"${arg}" not found in dictionary`);
            break;
        case 'complete':
            const words = trie.predictWords(arg);
            console.log(`Suggestions for '${arg}': ${words}`);
            break;
        case 'help':
            console.log("Commands:");
            console.log(" add <word>       - Add a word");
            console.log(" find <word>      - Check if word exists");
            console.log(" complete <prefix> - Get autocomplete suggestions");
            console.log(" exit             - Quit");
            break;
        case 'exit':
            console.log("Goodbye!");
            rl.close();
            return;
        default:
            console.log("Unknown command. Type 'help' for list.");
    }

    rl.prompt();
});

rl.on('close', () => {
    process.exit(0);
});


// const AutoCompleteTrieClass = require('./project');
// const trie = new AutoCompleteTrieClass();

// console.log("=== AutoComplete Trie Console ===");
// console.log("Type 'help' for commands");

// const [...info] = process.argv.slice(2);
// const command = getCommand(info);
// executeCommand(command);

// function getCommand(info) {
//     return info[0]?.trim(); // Ajoute un trim au cas où
// }

// function executeCommand(command) {
//     try {
//         switch (command) {
//             case 'add':
//                 trie.addWord(info[1]);
//                 console.log(`Added ${info[1]} to dictionary`);
//                 break;
//             case 'find':
//                 const found = trie.findWord(info[1]);
//                 if (found) {
//                     console.log(`${info[1]} exists in dictionary`);
//                 } else {
//                     console.log(`${info[1]} does NOT exist in dictionary`);
//                 }
//                 break;
//             case 'complete':
//                 const words = trie.predictWords(info[1]);
//                 console.log(`Suggestions for ${info[1]}: ${words.join(', ')}`);
//                 break;
//             case 'help':
//                 console.log('Commands:');
//                 console.log(' add <word> - Add word to dictionary');
//                 console.log(' find <word> - Check if word exists');
//                 console.log(' complete <prefix> - Get completions');
//                 console.log(' help - Show this message');
//                 console.log(' exit - Quit program');
//                 break;
//             case 'exit':
//                 console.log('Goodbye!');
//                 break;
//             default:
//                 console.log("Sorry, your command does not exist.");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }