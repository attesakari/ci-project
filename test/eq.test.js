// Oskari
import { expect, AssertionError } from "chai"
import eq from "../src/eq.js"


// Test cases for camelCase.js
describe("eq.js test", () => {

    it("1 and 1 should return true", ()=>
    {
        expect(eq(1,1)).to.equal(true)
    })

    it("1 and a should return false", ()=>
    {
        expect(eq(1,1)).to.equal(false)
    })
})

/*
* const object = { 'a': 1 }
* const other = { 'a': 1 }
*
* eq(object, object)
* // => true
*
* eq(object, other)
* // => false
*
* eq('a', 'a')
* // => true
*
* eq('a', Object('a'))
* // => false
*
* eq(NaN, NaN)
* // => true
*/
/*
function eq(value, other) {
 return value == other || (value !== value && other !== other)
}
 */