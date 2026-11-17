import { expect, AssertionError } from "chai"
import isEmpty from "../src/isEmpty.js"


// Test cases for add,js
describe("isEmpty.js test (tests made by students)", () => {

    describe("\n    These should return true, when parameter is empty:", () => {
        
        it("Parameter is empty", ()=>
        {
            expect(isEmpty()).to.equal(true)
        })

        it("Parameter is empty set", ()=>
        {
            expect(isEmpty(new Set())).to.equal(true)
        })

        it("Parameter is empty map", ()=>
        {
            expect(isEmpty(new Map())).to.equal(true)
        })

        it("Parameter is empty string", ()=>
        {
            expect(isEmpty("")).to.equal(true)
        })

        it("Parameter is integer (not a string, map or a set)", ()=>
        {
            expect(isEmpty(67)).to.equal(true)
        })

        it("Testing with empty object", ()=>
        {   
            const testObject = {};
            expect(isEmpty(testObject)).to.equal(true)
        })
        
        it("Testing with empty prototype", ()=>
        {   
            function testPrototype() {};
            
            expect(isEmpty(testPrototype.prototype)).to.equal(true)
        })
    })


    describe("\n    These should return false, when parameter isn't empty:", () => {
        
        it("Testing with set", ()=>
        {
            expect(isEmpty(new Set("Test"))).to.equal(false)
        })

        it("Testing with map", ()=>
        {
            expect(isEmpty(new Map([["key", "value"]]))).to.equal(false)
        })
        
        it("Testing with string", ()=>
        {
            expect(isEmpty("Test")).to.equal(false)
        })

        it("Testing with not prototype", ()=>
        {   
            const testObject = {
                city: "Madrid",
                weather: "Sunny"
            };
            expect(isEmpty(testObject)).to.equal(false)
        })

        it("Testing with non-empty prototype", ()=>
        {   
            function testPrototype(name) {
                this.name = name;
            };

            testPrototype.prototype.name = "Test";
            
            expect(isEmpty(testPrototype.prototype)).to.equal(false)
        })
    })

})




describe("isEmpty.js test (tests made by AI (Microsoft CoPilot))", () => {

    

})