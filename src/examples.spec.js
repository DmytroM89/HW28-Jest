import {sum, sumSpread, minus, multiply, divide, pow, isBigger, isSmaller, getUserInfo} from './examples'

describe('Sum', () => {
    test('Should return the sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
})

describe('Sum spread', () => {
    test('Should return the sum a few numbers', () => {
        expect(sumSpread(2,3,5,6)).toBe(16);
    });
})

describe('Minus', () => {
    test('Should return the difference of numbers', () => {
        expect(minus(9, 10)).toBe(-1);
    });
})

describe('Multiply', () => {
    test('Should return 4', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('Should return zero', () => {
        expect(multiply(2, 0)).toBe(0);
    });
})

describe('Divide', () => {
    test('Should return 1', () => {
        expect(divide(2, 2)).toBe(1);
    });

    test('Should return error message Infinity', () => {
        try {
            divide(4, 0);
        } catch(err) {
            expect(err.message).toBe(Infinity);
        }
    });
})

describe('Pow', () => {
    test('Should return 16', () => {
        expect(pow(2, 4)).toBe(16);
    });
})

describe('isBigger', () => {
    test('Should return true', () => {
        expect(isBigger(10, 2)).toBe(true);
    });
})

describe('isSmaller', () => {
    test('Should return true', () => {
        expect(isSmaller(2, 10)).toBe(true);
    });
})

describe('getUserInfo', () => {
    test('Should check that the object that returns getUserInfo contains Vick in the fullName property', () => {
        const userObj = getUserInfo();
        expect(userObj.fullName.includes('Vick')).toBe(true);
    });

    test('Should return a correct user info', () => {
        const userObj = getUserInfo();
        expect(getUserInfo()).toEqual({
            fullName: 'Vick Jone',
            age: 30,
            id: '123',
        });
    });
})
