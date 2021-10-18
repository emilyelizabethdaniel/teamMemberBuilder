const TeamMember = require('../create html/TeamMember');
const myTeamMember = new TeamMember('sue', '9999', 'susan@email.com');

describe('check to see if it returns the right role', () => {
    it('return the team member role', () => {
        expect(myTeamMember.getRole()).toBe('Team Member');
    });
    it('return the team member name', () => {
        expect(myTeamMember.getName()).toBe('sue');
    });
    it('return the team member id', () => {
        expect(myTeamMember.getId()).toBe('9999');
    });
    it('return the team member email', () => {
        expect(myTeamMember.getEmail()).toBe('susan@email.com');
    });
})