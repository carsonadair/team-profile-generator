const Employee = require('../lib/employees');


describe('Employee class', () => {
    describe('Constuctor', () => {
        it('should create a new object that shows a name, id, and email', () => {
            const employee = new Employee('John Johnson','1', 'johnjohnson@gmail.com');

            expect(employee.name).toEqual('John Johnson')
            expect(employee.id).toEqual('1')
            expect(employee.email).toEqual('johnjohnson@gmail.com')
        });
    });

    describe('getName', () => {
        it('should return the name', () => {
            expect(new Employee('John Johnson', '1', 'johnjohnson@gmail.com.com').getName()).toBe('John Johnson');
        });
    });

    describe('getId', () => {
        it('should return the id', () => {
            expect(new Employee ('John Johnson', '1', 'John Johnson@gmail.com').getId()).toBe('1');
        });
    });

    describe('getEmail', () => {
        it('should return the email', () => {
            expect(new Employee ('John Johnson', '1', 'johnjohnson@gmail.com').getEmail()).toBe('johnjohnson@gmail.com');
        });
    });

    describe('getRole', () => {
        it('should give the role', () => {
            expect(new Employee ('John Johnson', '1', 'johnjohnson@gmail.com').getRole()).toBe('Employee');
        });
    });
});