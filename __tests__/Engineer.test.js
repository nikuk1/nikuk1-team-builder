// The tests for these classes (in the _tests_ directory) must all pass.
//tests - jest
const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');

expect(engineer.name).toBe('Frank');
expect(engineer.id).toBe('30');
expect(engineer.email).toBe('franksemail');
expect(engineer.github).toBe('github');
});

test('gets the engineers name', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');
expect(engineer.getName()).toBe('Frank');
});

test('gets the engineers id', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');
expect(engineer.getId()).toBe('30');
});

test('gets the engineers email', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');
expect(engineer.getEmail()).toBe('franksemail');
});

test('gets the engineers role', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');
expect(engineer.getRole()).toBe('engineer');
});

test('gets the engineers office number', () => {
const engineer = new Engineer('Frank', '30', 'franksemail', 'github');
expect(engineer.getGitHub()).toBe('github');
});