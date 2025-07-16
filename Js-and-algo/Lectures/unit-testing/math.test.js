const { add, multiply } = require('./math')

// describe string with a title to this tests
// in each describe you have multiple tests
describe('Math functions', () => {
    it('should add two numbers correctly', () => {
        const result = add(2, 8);
        expect(result).toBe(10);
    })
    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 5)).toBe(10);
    })
    it('should check object eualiti with toEqual', () => {
        let p1 = { name: "John" };
        let p2 = { name: "John" };
        expect(p1).toEqual(p2)
    })


    it('should multiply in async', (done) => {
        setTimeout(() => {
            expect(multiply(2, 5)).toBe(10);
            done();
        }, 2000)
    })
})