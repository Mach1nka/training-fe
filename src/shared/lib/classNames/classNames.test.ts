import { classNames } from './classNames';

describe('classNames', () => {
  test('class name', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('additional class', () => {
    const expectedResult = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedResult);
  });

  test('class mods', () => {
    const expectedResult = 'someClass hovered clickable';
    expect(classNames('someClass', { hovered: true, clickable: true }, [])).toBe(expectedResult);
  });

  test('class mods', () => {
    const expectedResult = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, clickable: false }, ['class1', 'class2']))
      .toBe(expectedResult);
  });
});
