import {describe, it, except} from 'vitest';

describe('Sample Test', () => { 
    it('should pass', () => {
        const sum = 1 + 1;
        expect(sum).toEqual(2);
    })
})