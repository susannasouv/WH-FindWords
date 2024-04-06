## High-Level Approach
1. Create a map of letters to number of occurences for the input string.
2. Iterate through each word of the dictionary.
    * Check that the word length does not exceed the length of the input string.
        * If it does exceed, we know that it's impossible to construct that word since there aren't enough letters, so we can skip that word.
    * For an eligible word, we iterate through each of its letters.
        * If the letter doesn't exist in the input string's letter map (from step 1), we know that it's impossible to construct that word, so we can move on to the next word.
        * If the letter does exist in the input string's letter map, we decrement its count to show that we used it. If the decrement brings the count down to 0, we remove it from the map. From here, we continue iterating.
    * If we were able to iterate through the word completely, we know that it's possible to construct the word from the input string, so we add it to the list of words to return.

## How to Run Jest Tests
The following assumes that `npm` is already installed.

```
npm i
npm test
```

If there's any difficulty with running tests locally, the code and its test cases can also be tested by copying the code from `src/index.ts` to somewhere like TypeScript playground, uncommenting the tests, and executing the code.