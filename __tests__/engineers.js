const Engineer = require('../lib/engineers');

describe('The Engineer', () => {
    describe('Engineer', () => {
        it('should create an object with the properties from the engineer subclass', () => {
            const engineer = new Engineer('John Johnson', '1', 'johnjohnson@gmail.com', 'JohnJohnson')

            expect(engineer.name).toEqual('John Johnson');
            expect(engineer.id).toEqual('1');
            expect(engineer.email).toEqual('johnjohnson@gmail.com');
            expect(engineer.github).toEqual('JohnJohnson');
        });
    });

    describe('getRole fuction from the engineer subclass', () => {
        it('should return the engineers role', () => {
            expect(new Engineer('John Johnson', '1', 'johnjohnson@gmail.com', 'JohnJohnson').getRole()).toBe('Engineer');
        });
    });

    describe('getGitHub fuction from the engineer subclass', () => {
        it('should return the engineers github', () => {
            expect(new Engineer('John Johnson', '1', 'johnjohnson@gmail.com', 'JohnJohnson').getGithub()).toBe('JohnJohnson');
        });
    });
});