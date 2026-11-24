import { expect, AssertionError } from "chai"
import compact from "../src/compact.js"
// Oskari

// Test cases for compact.js
describe("compact.js test", () => {
    // Positive test
    it("Array with one zero in between should return without it", ()=>
    {
        expect(compact([1,0,1])).to.equal([1,1])
    })

    it("Array with one zero in between should return without it", ()=>
    {
        expect(compact([1,2,3,4,5,6,7])).to.equal([1,2,3,4,5,6,7])
    })

    it("Array with one zero in between should return without it", ()=>
    {
        expect(compact([0,0])).to.equal([])
    })

    // Negative test
    it("Array with one zero in between should return without it", ()=>
    {
        expect(compact("bingo")).to.console.error();
        
    })
})