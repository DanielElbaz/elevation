class AutoCompleteTrie {
    constructor(value = '') {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {
        let myNode = this;
        for (const char of word) {
            if (!myNode.children[char]) {
                myNode.children[char] = new AutoCompleteTrie(char);
            }
            myNode = myNode.children[char]
        }
        myNode.endOfWord = true;

    }

    findWord(word) {
        let myNode = this;
        for (let char of word) {
            if (!myNode.children[char]) {
                return false;
            }
            myNode = myNode.children[char];
        }
        return myNode.endOfWord;
    }

    _getRemainingTree(prefix, node) {

        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char]
        }
        return node;
    }

    _allWordsHelper(prefix, node, allWords) {
        if (node.endOfWord) {
            allWords.push(prefix);
        }
        for (let char in node.children) {
            this._allWordsHelper(prefix + char, node.children[char], allWords);
        }
    }


    predictWords(prefix) {
        const arr = [];
        const node = this._getRemainingTree(prefix, this);
        if (!node) return arr;
        this._allWordsHelper(prefix, node, arr);
        return arr;
    }
}




module.exports = AutoCompleteTrie;