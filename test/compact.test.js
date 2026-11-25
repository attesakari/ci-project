import { expect, AssertionError } from "chai"
import compact from "../src/compact.js"
// Oskari

// Test cases for compact.js
describe("compact.js test", () => {
    // Positive test
    it("Array with one zero in between should return without it", ()=>
    {
        expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
    })

    it("Array with integers with integers should return the same", ()=>
    {
        expect(compact([1,2,3,4,5,6])).to.deep.equal([1,2,3,4,5,6])
    })

    it("Zeros should be gone from the array", ()=>
    {
        expect(compact([0,0])).to.deep.equal([])
    })

    // Negative test
    it("Non array should return error", ()=>
    {
        expect(() => compact("bingo")).to.throw();
        
    })
})


// Täällähän on bugi !BINGO