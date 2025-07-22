const AutoCompleteTrie = require('./project');

describe('AutoCompleteTrie - full test suite', () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  // ========== Basic Behavior ==========
  test('adds and finds a single word', () => {
    trie.addWord('dog');
    expect(trie.findWord('dog')).toBe(true);
  });

  test('returns false for non-existent word', () => {
    expect(trie.findWord('cat')).toBe(false);
  });

  test('can distinguish between prefix and full word', () => {
    trie.addWord('car');
    expect(trie.findWord('ca')).toBe(false);
  });

  // ========== Multiple Words ==========
  test('can add and find multiple words', () => {
    const words = ['apple', 'banana', 'grape', 'grapefruit'];
    words.forEach(w => trie.addWord(w));
    words.forEach(w => expect(trie.findWord(w)).toBe(true));
  });

  // ========== Autocomplete Tests ==========
  test('predictWords returns matching completions', () => {
    trie.addWord('hello');
    trie.addWord('help');
    trie.addWord('helmet');
    trie.addWord('hero');
    trie.addWord('dog');
    const suggestions = trie.predictWords('he');
    expect(suggestions.sort()).toEqual(['hello', 'help', 'helmet', 'hero'].sort());
  });

  test('predictWords returns empty array for no matches', () => {
    trie.addWord('one');
    trie.addWord('two');
    expect(trie.predictWords('zzz')).toEqual([]);
  });

  test('predictWords on full word returns the word if it exists', () => {
    trie.addWord('king');
    expect(trie.predictWords('king')).toEqual(['king']);
  });

  // ========== Case Sensitivity (optional) ==========
  test('case-insensitive behavior if converted to lower-case', () => {
    trie.addWord('Tree'.toLowerCase());
    expect(trie.findWord('TREE'.toLowerCase())).toBe(true);
    expect(trie.predictWords('tr'.toLowerCase())).toContain('tree');
  });

  // ========== Edge Cases ==========
  test('empty prefix returns all words', () => {
    ['a', 'b', 'c'].forEach(w => trie.addWord(w));
    const allWords = trie.predictWords('');
    expect(allWords.sort()).toEqual(['a', 'b', 'c'].sort());
  });

  test('adding the same word twice does not duplicate it', () => {
    trie.addWord('repeat');
    trie.addWord('repeat');
    const result = trie.predictWords('re');
    expect(result).toEqual(['repeat']);
  });

  test('addWord works with single-character words', () => {
    trie.addWord('x');
    expect(trie.findWord('x')).toBe(true);
  });

  test('addWord works with long words', () => {
    const word = 'pneumonoultramicroscopicsilicovolcanoconiosis';
    trie.addWord(word);
    expect(trie.findWord(word)).toBe(true);
    expect(trie.predictWords('pneumono')).toContain(word);
  });

  test('adding empty string should not crash and not be found', () => {
    trie.addWord('');
    expect(trie.findWord('')).toBe(false);
    expect(trie.predictWords('')).not.toContain('');
  });

  // ========== Internal Methods (optionally tested) ==========
  test('_getRemainingTree returns correct node for prefix', () => {
    trie.addWord('happy');
    const node = trie._getRemainingTree('hap', trie);
    expect(node).not.toBe(false);
    expect(node.value).toBe('p');
  });

  test('_allWordsHelper collects all valid words under a node', () => {
    ['hand', 'handle', 'hands'].forEach(w => trie.addWord(w));
    const node = trie._getRemainingTree('hand', trie);
    const arr = [];
    trie._allWordsHelper('hand', node, arr);
    expect(arr.sort()).toEqual(['hand', 'handle', 'hands'].sort());
  });

  // ========== Unicode & accents ==========
  test('handles unicode characters', () => {
    trie.addWord('café');
    expect(trie.findWord('café')).toBe(true);
    expect(trie.predictWords('ca')).toContain('café');
  });

  test('handles emojis or non-Latin characters', () => {
    trie.addWord('🐶dog');
    expect(trie.findWord('🐶dog')).toBe(true);
    expect(trie.predictWords('🐶')).toContain('🐶dog');
  });
});
