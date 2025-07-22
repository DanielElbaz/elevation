const AutoCompleteTrie=require('./project')

describe("Test for add Word:",()=>{
    it('should add Daniel to the trie',()=>{
        expect(AutoCompleteTrie.addWord('Daniel')).toBe("Daniel")
    })
})