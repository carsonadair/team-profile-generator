const Manager = require('../lib/manager');

describe('The Manager', () => {
    describe('Manager', ()=> {
        it('should create an object with the properties from the manager subclass', () => {
            const manager = new Manager('John Johnson', '1', 'johnjohnson@gmail.com', '2');

            expect(manager.name).toEqual('John Johnson');
            expect(manager.id).toEqual('1');
            expect(manager.email).toEqual('johnjohnson@gmail.com');
            expect(manager.office).toEqual('2');
        });
    });

    describe('getRole function from manager class', () => {
        it('should return the managers role', () => {
            expect(new Manager('John Johnson', '1', 'johnjohnson@gmail.com', '2').getRole()).toBe('Manager');
        });
    });

    describe('office function form the manager class', () => {
        it('should return the managers office number', () => {
            expect(new Manager('John Johnson', '1', 'johnjohnson@gmail.com', '2').getOffice()).toBe('2');
        });
    });
});