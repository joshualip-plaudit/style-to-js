import { camelCase } from './utilities';

describe('camelCase', () => {
  it('returns "" for empty string', () => {
    expect(camelCase('')).toBe('');
  });

  // no hyphen
  it.each([
    ['foo', 'foo'],
    ['fooBar', 'fooBar'],
  ])('does not transform "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });

  // custom property
  it.each([
    ['--fooBar', '--fooBar'],
    ['--foo-bar', '--foo-bar'],
    ['--foo-100', '--foo-100'],
  ])('does not transform custom property "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });

  // vendor prefix
  it.each([
    ['-khtml-transition', 'khtmlTransition'],
    ['-moz-user-select', 'mozUserSelect'],
    ['-ms-user-select', 'msUserSelect'],
    ['-o-transition', 'oTransition'],
    ['-webkit-transition', 'webkitTransition'],
    ['-webkit-user-select', 'webkitUserSelect'],
  ])('transforms vendor prefix "%s" to "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });

  it.each([
    ['foo-bar', 'fooBar'],
    ['foo-bar-baz', 'fooBarBaz'],
    ['CAMEL-CASE', 'camelCase'],
  ])('transforms "%s" to "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });
});
