// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('isPhoneNumber returns true for phone number with parentheses around area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number with dashed area code', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with no dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});




// isEmail
test('isEmail returns true for valid email with .com', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('isEmail returns true for valid email with .edu', () => {
  expect(isEmail('student@test.edu')).toBe(true);
});

test('isEmail returns false for email without @ symbol', () => {
  expect(isEmail('studentexample.com')).toBe(false);
});

test('isEmail returns false for email without domain', () => {
  expect(isEmail('student@example')).toBe(false);
});




// isStrongPassword
test('isStrongPassword returns true for password starting with a letter and containing numbers', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('isStrongPassword returns true for password with underscore', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword returns false for password starting with a number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword returns false for password shorter than 4 characters', () => {
  expect(isStrongPassword('abc')).toBe(false);
});




// isDate
test('isDate returns true for date with one digit month and day', () => {
  expect(isDate('1/1/2026')).toBe(true);
});

test('isDate returns true for date with two digit month and day', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('isDate returns false for date using dashes', () => {
  expect(isDate('12-25-2026')).toBe(false);
});

test('isDate returns false for date with two digit year', () => {
  expect(isDate('12/25/26')).toBe(false);
});




// isHexColor
test('isHexColor returns true for 3 character hex color with #', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for 6 character hex color without #', () => {
  expect(isHexColor('fff')).toBe(true);
});

test('isHexColor returns false for invalid hex character', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('isHexColor returns false for wrong length hex color', () => {
  expect(isHexColor('#ffff')).toBe(false);
});