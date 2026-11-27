import { describe, expect, it } from 'vitest';
import { matchesGameTitle } from './game-search';

describe('matchesGameTitle', () => {
  it.each([
    ['qUeSt', true],
    ['  QUEST  ', true],
    ['', true],
    ['   ', true],
    ['Adventure', false],
  ])('matches Code Quest Odyssey with query %j: %s', (query, expected) => {
    expect(matchesGameTitle('Code Quest Odyssey', query)).toBe(expected);
  });
});
