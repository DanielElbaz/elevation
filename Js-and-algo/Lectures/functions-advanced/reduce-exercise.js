const sentence = "the quick brown fox jumps over the lazy dog the fox";

const occurences = countWords(sentence.split(" "));

console.log(occurences);

function countWords(words) {
    const wordCount = {};

    for (const word of words) {
        // if (wordCount[word]) {
        //     ++wordCount[word];
        // } else {
        //     wordCount[word] = 1;
        // }

        // wordCount[word] = (wordCount[word] || 0) + 1;


        wordCount[word] = wordCount[word] ? (wordCount[word]+1) : 1;
    }
    return wordCount;
}

const occurences2 = countWordsReduce(sentence.split(" "));
console.log(occurences2);

function countWordsReduce(words) {
    return words.reduce(function (wordCount, word) {
        wordCount[word] = wordCount[word] ? wordCount[word] +1 : 1;
        return wordCount;
    }, {})
}

