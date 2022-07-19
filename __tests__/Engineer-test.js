const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    test("should return the engineer's name", () => {
        const engineer = new Engineer('Mason', 1, 'Mason@mason.com', 'MasonMags')
        expect(engineer.getName()).toEqual('Mason')
    });

    test("should return the engineer's ID", () => {
        const engineer = new Engineer('Mason', 1, 'Mason@mason.com', 'MasonMags')
        expect(engineer.getId()).toEqual(1)
    });

    test("should return the engineer's email", () => {
        const engineer = new Engineer('Mason', 1, 'Mason@mason.com', 'MasonMags')
        expect(engineer.getEmail()).toEqual('Mason@mason.com')
    });

    test("should return the engineer's github", () => {
        const engineer = new Engineer('Mason', 1, 'Mason@mason.com', 'MasonMags')
        expect(engineer.getGithub()).toEqual('MasonMags')
    });

    test("should return the employee's role", () => {
        const engineer = new Engineer('Mason', 1, 'Mason@mason.com', 'MasonMags')
        expect(engineer.getRole()).toEqual('Engineer')
    });
});