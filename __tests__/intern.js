const Intern = require('../lib/intern');


describe('The Intern', () => {
    describe('Intern', () => {
        it('should create an object with the properties from the intern subclass', () => {
            const intern = new Intern('John Johnson', '1', 'johnjohnson@gmail.com', 'UConn')

            expect(intern.name).toEqual('John Johnson');
            expect(intern.id).toEqual('1');
            expect(intern.email).toEqual('johnjohnson@gmail.com');
            expect(intern.school).toEqual('UConn');
        });
    });

    describe('getRole fuction from the intern subclass', () => {
        it('should return the interns role', () => {
            expect(new Intern('John Johnson', '1', 'johnjohnson@gmail.com', 'UConn').getRole()).toBe('Intern');
        });
    });

    describe('getSchool fuction from the intern subclass', () => {
        it('should return the interns school', () => {
            expect(new Intern('John Johnson', '1', 'johnjohnson@gmail.com', 'UConn').getSchool()).toBe('UConn');
        });
    });
});