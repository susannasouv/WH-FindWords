function findWords(inputString: string, dictionary: string[]): string[] {
  const foundWords: string[] = [];
  return foundWords;
}

function runTests() {
  const testCases = [
    ["ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"], ["ate", "eat", "tea"]],
    ["oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"], ["dog", "do", "god", "goo", "go", "good"]],
    ["be", ["babbling", "bada", "bing", "be"], ["be"]],
    ["", ["a", "cat", "goodie"], []],
    ["cat", ["cat", "cab"], ["cat"]],
    ["blah", [], []],
    ["", [], []],
    ["supercalifragilisticexpialidocious", ["super", "doc", "fragile", "justice"], ["super", "doc", "fragile"]]
  ]
  
  testCases.forEach((testCase) => {
    const inputString = testCase[0] as string;
    const dictionary = testCase[1] as string[];
    const expectedOutput = testCase[2];
    const actual = findWords(inputString, dictionary);
    const result = expectedOutput.toString() === actual.toString() ? "PASS" : "FAIL";
    console.log(`${result}: findWords(${inputString}, [${dictionary}]) => [${actual}], expected [${expectedOutput}]`);
  })
}

runTests();
