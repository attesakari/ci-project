// Words
import { expect, AssertionError } from "chai"
import words from "../src/words.js"



// Words.js relies on unicodewords library so we can assume that it is tested and that we only need to test if the function works properly
describe("words.js test", () => {
    it("Should return words in an array without non alphabet symbols ",()=>
    {
        expect(words("Death of a ladies' man")).to.deep.equal(["Death", "of", "a", "ladies", "man"])
    })

    it("Should return words in an array without non alphabet symbols or numbers ",()=>
    {
        expect(words("12.30 ruokatauko kaikilla!")).to.deep.equal(["12","30", "ruokatauko", "kaikilla"])
    })

})