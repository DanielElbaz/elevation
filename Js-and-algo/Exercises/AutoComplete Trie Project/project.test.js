const AutoCompleteTrie = require('./project');

describe('AutoCompleteTrie', () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test('addWord should insert a word into the trie', () => {
    trie.addWord('hello');
    expect(trie.findWord('hello')).toBe(true);
  });

  test('findWord should return true for existing words', () => {
    trie.addWord('world');
    expect(trie.findWord('world')).toBe(true);
  });

  test('findWord should return false for non-existing words', () => {
    expect(trie.findWord('banana')).toBe(false);
  });

  test('predictWords should return correct completions', () => {
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('cart');
    trie.addWord('dog');
    expect(trie.predictWords('ca')).toEqual(['cat', 'car', 'cart']);
  });

  test('predictWords returns empty array for unknown prefix', () => {
    trie.addWord('one');
    trie.addWord('only');
    expect(trie.predictWords('xyz')).toEqual([]);
  });

  test('addWord does not duplicate existing words', () => {
    trie.addWord('test');
    trie.addWord('test');
    expect(trie.predictWords('te')).toEqual(['test']); 
  });
});
