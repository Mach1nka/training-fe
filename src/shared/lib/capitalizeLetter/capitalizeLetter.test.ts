import { capitalizeLetter } from './capitalizeLetter';

describe('capitalizeLetter', () => {
  test('string arg', () => {
    const capitalized = capitalizeLetter('letter');

    expect(capitalized).toBe('Letter');
  });

  test('undefined arg', () => {
    const capitalized = capitalizeLetter(undefined);

    expect(capitalized).toBe('');
  });
});
