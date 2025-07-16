const Exercises = require('./exercises')

describe('test for isEven: ', () => {
    it('should be an even rest', () => {
        expect((Exercises.isEven(16))).toBeTruthy()
    });
    it('should be an odd rest', () => {
        expect((Exercises.isEven(17))).toBeFalsy()
    });
});

describe('test for removeAtLeastOne', () => {
    it('should remove at least one', () => {
        const arr = [1, 2, 3];
        const result = Exercises.removeAtLeastOne([...arr]); 
        expect(result.length).toBeLessThan(arr.length); 
        
    });
});

