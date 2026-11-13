import { expect, AssertionError } from "chai"
import add from "../src/add.js"


// Test cases for add,js
describe("add.js test", () => {

    it("Should return 5 with augend as 2 and addend as 3", ()=>
    {
        expect(add(2,3)).to.equal(5)
    })

    it("3+6 should not equal to 3", ()=>
    {
        expect(add(3, 6)).not.to.equal(3)
    })
})