// The tests for these classes (in the _tests_ directory) must all pass.
// jest tests
const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');

expect(intern.name).toBe('Frank');
expect(intern.id).toBe('43');
expect(intern.email).toBe('franksemail');
expect(intern.school).toBe('school');
});

test('gets the interns name', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');
expect(intern.getName()).toBe('Frank');
});

test('gets the interns id', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');
expect(intern.getId()).toBe('43');
});

test('gets the interns email', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');
expect(intern.getEmail()).toBe('franksemail');
});

test('gets the interns role', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');
expect(intern.getRole()).toBe('intern');
});

test('gets the interns office number', () => {
const intern = new Intern('Frank', '43', 'franksemail', 'school');
expect(intern.getSchool()).toBe('school');
});