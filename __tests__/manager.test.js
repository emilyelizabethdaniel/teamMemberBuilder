const TeamManager = require('../js/TeamManager');
const myTeamManager = new TeamManager('emily', '4545', 'email.com', '888');
describe('fizzBuzz', () => {
    it('return the team member role', () => {
        expect(myTeamManager.getRole()).toBe('Team Manager');
    });

    // it('should return Fizz if multiple of 3', () => {
    //     expect(TeamManager([3])).toBe('Fizz');
    //     expect(TeamManager([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
    // });

    // it('should return Buzz if multiple of 5', () => {
    //     expect(TeamManager([10])).toBe('Buzz');
    //     expect(TeamManager([10, 20, 25])).toBe('Buzz, Buzz, Buzz');
    // });

    // it('should return FizzBuzz if a multiple of both 3 and 5', () => {
    //     expect(TeamManager([15])).toBe('FizzBuzz');
    //     expect(TeamManager([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
    // });

});