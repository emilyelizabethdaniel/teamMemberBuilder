const Engineer = require('../create html/Engineer');
const myEngineer = new Engineer('Timmy', '5555', 'tim@gmail.com', 'timmygithub');

describe('check to see if it returns the right role', () => {
    it('return the team member role', () => {
        expect(myEngineer.getRole()).toBe('Engineer');
    });
    it('return the team member name', () => {
        expect(myEngineer.getName()).toBe('Timmy');
    });
    it('return the team member id', () => {
        expect(myEngineer.getId()).toBe('5555');
    });
    it('return the team member email', () => {
        expect(myEngineer.getEmail()).toBe('tim@gmail.com');
    });
    it('return the team member office number', () => {
        expect(myEngineer.getGithub()).toBe('timmygithub');
    })
})