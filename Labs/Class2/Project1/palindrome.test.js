
const isPalindrome = require('./palindrome.js');
describe("shouldOnlyAcceptOneParameter", () => {
    test("works with one parameter", () => {
        let result = isPalindrome("jewel");
        expect(typeof result).toBe("boolean");
    });

    test("should not work with two parameters", () => {
        expect(() => isPalindrome("word", "jewel")).toThrow("Invalid number of parameters. This function can only accept 1");
    });

    test("should not work with no parameters", () => {
        expect(() => isPalindrome().toThrow("Invalid number of parameters. This function can only accept 1"));
    })
});


describe("shouldOnlyAcceptStrings", () => {
    test("works with String", () => {
        let result = isPalindrome("jewel");
        expect(typeof result).toBe("boolean");
    });
    test("does not work with not a String", () => {
        expect(() => isPalindrome(true).toThrow("Invalid parameter type. This function only accepts Strings"))
    });
})

describe("shouldDetermineIfSimpleWordIsPallindrome", () => {
    test("should return true with racecar", () => {
        let result = isPalindrome("racecar");
        expect(result).toBe(true);
    });

    test("should return true with madam", () => {
        let result = isPalindrome("madam");
        expect(result).toBe(true);
    });

    test("should return false with apple", () => {
        let result = isPalindrome("apple");
        expect(result).toBe(false);
    });
});


describe("shouldNotBeCaseSensitive", () => {
    test("should return true with Racecar", () => {
        let result = isPalindrome("Racecar");
        expect(result).toBe(true);
    })

    test("should return true with madaM", () => {
        let result = isPalindrome("madaM");
        expect(result).toBe(true);
    })
});

describe("shouldIgnorePunctuationAndSpaces", () => {
    test("should return true with .racecar", () => {
        let result = isPalindrome(".racecar");
        expect(result).toBe(true);
    });

    test("should return true with race car", () => {
        let result = isPalindrome("race car");
        expect(result).toBe(true);
    })

    test("should return true with red rum, sir, is murder.", () => {
        let result = isPalindrome("red rum, sir, is murder.");
        expect(result).toBe(true);
    })
});

describe("edgeCaseTests", () => {
    test("should return true with Doc, note: I dissent. A fast never prevents a fatness. I diet on cod", () => {
        let result = isPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod");
        expect(result).toBe(true);
    });

    test("should return true with T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.", () => {
        let result = isPalindrome("T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.");
        expect(result).toBe(true);
    })

    test("should return true with May a moody baby doom a yam?", () => {
        let result = isPalindrome("May a moody baby doom a yam?");
        expect(result).toBe(true);
    })
})

