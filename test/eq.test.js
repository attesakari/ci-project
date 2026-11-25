// Oskari
import { expect, AssertionError } from "chai"
import eq from "../src/eq.js"


// Test cases for camelCase.js
describe("eq.js test", () => {
    // Positive test
    it("1 and 1 should return true", ()=>
    {
        expect(eq(1,1)).to.equal(true)
    })
    it("1 and 1 should return true", ()=>
    {
        expect(eq("a","a")).to.equal(true)
    })
    it("1 and 1 should return true", ()=>
    {
        expect(eq(NaN,NaN)).to.equal(true)
    })

    // Negative tests
    it("1 and a should return false", ()=>
    {
        expect(eq(1,"a")).to.equal(false)
    })

    it("n and bingo should return false", ()=>
    {
        expect(eq("n","bingo")).to.equal(false)
    })
    it("n and bingo should return false", ()=>
    {
        expect(eq(NaN,1)).to.equal(false)
    })
})