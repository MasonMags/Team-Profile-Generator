const Manager = require('../lib/Manager')

describe("Manager", () => {
    test("should return the manager's name", () => {
        const manager = new Manager('Mason', 1, 'Mason@mason.com', 1)
        expect(manager.getName()).toEqual('Mason')
    });

    test("should return the manager's ID", () => {
        const manager = new Manager('Mason', 1, 'Mason@mason.com', 1)
        expect(manager.getId()).toEqual(1)
    });

    test("should return the manager's email", () => {
        const manager = new Manager('Mason', 1, 'Mason@mason.com', 1)
        expect(manager.getEmail()).toEqual('Mason@mason.com')
    });

    test("should return the manager's office number", () => {
        const manager = new Manager('Mason', 1, 'Mason@mason.com', 1)
        expect(manager.getOfficeNumber()).toEqual(1)
    });

    test("should return the employee's role", () => {
        const manager = new Manager('Mason', 1, 'Mason@mason.com', 1)
        expect(manager.getRole()).toEqual('Manager')
    });
});