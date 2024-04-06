function isWordConstructable(
  word: string,
  letterMap: Map<string, number>
): boolean {
  return word.split("").every((letter) => {
    // if any letter returns false, the iteration will stop
    if (!letterMap.has(letter)) {
      // the letter either does not exist or has been used up
      // the word is definitely unconstructable with the input string letters
      // so we can break out
      return false;
    }
    const letterCount = letterMap.get(letter) || 0;
    if (letterCount > 1) {
      // decrement corresponding letter count to indicate usage
      letterMap.set(letter, letterCount - 1);
    } else {
      // last usage of the letter, so we should remove it from the map
      letterMap.delete(letter);
    }
    // the letter existed, so we can continue
    return true;
  });
}

function findWords(inputString: string, dictionary: string[]): string[] {
  // map each letter to the number of occurrences
  const letterMap = new Map<string, number>();
  inputString.split("").forEach((letter) => {
    const letterCount = letterMap.get(letter) || 0;
    letterMap.set(letter, letterCount + 1);
  });

  return dictionary.filter(
    (word) =>
      word.length <= inputString.length &&
      // if the word is longer than the input string, the word definitely cannot be
      // formed by the letters in the input string, so we can move on to the next word
      isWordConstructable(word, new Map(letterMap))
  );
}

// easy TESTS if jest is not working properly
// function runTests() {
//   const testCases = [
//     [
//       "ate",
//       ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
//       ["ate", "eat", "tea"],
//     ],
//     [
//       "oogd",
//       ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
//       ["dog", "do", "god", "goo", "go", "good"],
//     ],
//     ["be", ["babbling", "bada", "bing", "be"], ["be"]],
//     ["", ["a", "cat", "goodie"], []],
//     ["cat", ["cat", "cab"], ["cat"]],
//     ["blah", [], []],
//     ["", [], []],
//     [
//       "supercalifragilisticexpialidocious",
//       ["super", "doc", "fragile", "justice"],
//       ["super", "doc", "fragile"],
//     ],
//   ];

//   testCases.forEach((testCase) => {
//     const inputString = testCase[0] as string;
//     const dictionary = testCase[1] as string[];
//     const expectedOutput = testCase[2];
//     const actual = findWords(inputString, dictionary);
//     const result =
//       expectedOutput.toString() === actual.toString() ? "PASS" : "FAIL";
//     console.log(
//       `${result}: findWords(${inputString}, [${dictionary}]) => [${actual}], expected [${expectedOutput}]`
//     );
//   });
// }

// runTests();

export default findWords;
