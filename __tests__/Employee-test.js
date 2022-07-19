const Employee = require('../lib/Employee');

describe("Employee", () => {
        test("should return the employee's name", () => {
            const employee = new Employee('Mason', 1, 'Mason@mason.com')
            expect(employee.getName()).toEqual('Mason')
        });

        test("should return the employee's ID", () => {
            const employee = new Employee('Mason', 1, 'Mason@mason.com')
            expect(employee.getId()).toEqual(1)
        });

        test("should return the employee's email", () => {
            const employee = new Employee('Mason', 1, 'Mason@mason.com')
            expect(employee.getEmail()).toEqual('Mason@mason.com')
        });

        test("should return the employee's role", () => {
            const employee = new Employee('Mason', 1, 'Mason@mason.com')
            expect(employee.getRole()).toEqual('Employee')
        });
});