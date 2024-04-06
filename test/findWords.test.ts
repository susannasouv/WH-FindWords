import findWords from "../src";

describe("findWords", () => {
  test("words that are anagrams of the input string", () => {
    expect(
      findWords("ate", [
        "ate",
        "eat",
        "tea",
        "dog",
        "do",
        "god",
        "goo",
        "go",
        "good",
      ])
    ).toEqual(["ate", "eat", "tea"]);
  });
  test("words that are anagrams of substrings of the input string", () => {
    expect(
      findWords("oogd", [
        "ate",
        "eat",
        "tea",
        "dog",
        "do",
        "god",
        "goo",
        "go",
        "good",
      ])
    ).toEqual(["dog", "do", "god", "goo", "go", "good"]);
  });
  test("words that are longer than input string", () => {
    expect(findWords("be", ["babbling", "bada", "bing", "be"])).toEqual(["be"]);
  });
  test("empty input string and non-empty dictionary", () => {
    expect(findWords("", ["a", "cat", "goodie"])).toEqual([]);
  });
  test("word that differs by one letter", () => {
    expect(findWords("cat", ["cat", "cab", "cot"])).toEqual(["cat"]);
  });
  test("non-empty input string and empty dictionary", () => {
    expect(findWords("blah", [])).toEqual([]);
  })
  test("empty input string and empty dictionary", () => {
    expect(findWords("", [])).toEqual([]);
  });
});
