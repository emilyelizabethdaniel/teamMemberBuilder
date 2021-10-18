const Intern = require('../create html/Intern');
const myIntern = new Intern('Sophie', '7777', 'sophie@hotmail.com', 'U of M');

describe('check to see if it returns the right role', () => {
    it('return the team member role', () => {
        expect(myIntern.getRole()).toBe('Intern');
    });
    it('return the team member name', () => {
        expect(myIntern.getName()).toBe('Sophie');
    });
    it('return the team member id', () => {
        expect(myIntern.getId()).toBe('7777');
    });
    it('return the team member email', () => {
        expect(myIntern.getEmail()).toBe('sophie@hotmail.com');
    });
    it('return the team member office number', () => {
        expect(myIntern.getSchool()).toBe('U of M');
    })
})