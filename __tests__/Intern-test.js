const Intern = require('../lib/Intern')

describe("Intern", () => {
    test("should return the intern's name", () => {
        const intern = new Intern('Mason', 1, 'Mason@mason.com', 'JS University')
        expect(intern.getName()).toEqual('Mason')
    });

    test("should return the intern's ID", () => {
        const intern = new Intern('Mason', 1, 'Mason@mason.com', 'JS University')
        expect(intern.getId()).toEqual(1)
    });

    test("should return the intern's email", () => {
        const intern = new Intern('Mason', 1, 'Mason@mason.com', 'JS University')
        expect(intern.getEmail()).toEqual('Mason@mason.com')
    });

    test("should return the intern's school", () => {
        const intern = new Intern('Mason', 1, 'Mason@mason.com', 'JS University')
        expect(intern.getSchool()).toEqual('JS University')
    });

    test("should return the employee's role", () => {
        const intern = new Intern('Mason', 1, 'Mason@mason.com', 'JS University')
        expect(intern.getRole()).toEqual('Intern')
    });
});