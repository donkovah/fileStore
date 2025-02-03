import { getSortedStrings } from "./sortStrings";

describe('getSortedStrings', () => {
  it('should return a sorted array of strings without modifying the original array', () => {
    const input = ['banana', 'apple', 'cherry'];
    const expected = ['apple', 'banana', 'cherry'];

    const result = getSortedStrings(input);

    expect(result).toEqual(expected);
    expect(result).not.toBe(input);
    expect(input).toEqual(['banana', 'apple', 'cherry']);
  });

  it('should return an empty array when input is empty', () => {
    expect(getSortedStrings([])).toEqual([]);
  });

  it('should handle null or undefined input gracefully', () => {
    expect(getSortedStrings(null as any)).toEqual([]);
    expect(getSortedStrings(undefined as any)).toEqual([]);
  });
});
