// The tests for these classes (in the _tests_ directory) must all pass.
// trsts
const Manager = require('../lib/Manager.js');

test('create a manager object', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');

expect(manager.name).toBe('Frank');
expect(manager.id).toBe('43');
expect(manager.email).toBe('franksemail');
expect(manager.officeNumber).toBe('43');
});

test('gets the managers name', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');
expect(manager.getName()).toBe('Frank');
});

test('gets the managers id', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');
expect(manager.getId()).toBe('43');
});

test('gets the managers email', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');
expect(manager.getEmail()).toBe('franksemail');
});

test('gets the managers role', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');
expect(manager.getRole()).toBe('manager');
});

test('gets the managers office number', () => {
const manager = new Manager('Frank', '43', 'franksemail', '43');
expect(manager.getOfficeNumber()).toBe('43');
});