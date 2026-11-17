import { expect, AssertionError } from "chai"
import isEmpty from "../src/isEmpty.js"


// Test cases for add,js
describe("isEmpty.js test (tests made by students)", () => {

    describe("\n    These should return true, when parameter is empty:", () => {
        
        it("Testing with empty", ()=>
        {
            expect(isEmpty()).to.equal(true)
        })

        it("Testing with empty set", ()=>
        {
            expect(isEmpty(new Set())).to.equal(true)
        })

        it("Testing with empty array", () => {
            expect(isEmpty([])).to.equal(true)
        })

        it("Testing with empty map", ()=>
        {
            expect(isEmpty(new Map())).to.equal(true)
        })

        it("Testing with empty string", ()=>
        {
            expect(isEmpty("")).to.equal(true)
        })

        it("Testing with integer (not a string, map or a set)", ()=>
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

        it("Testing with Buffer", () => 
        {
            expect(isEmpty(Buffer.alloc(0))).to.equal(true)
        })


        it("Testing with arguments", () => 
        {
            const value = (function() {
                return arguments
            })();

            expect(isEmpty(value)).to.equal(true)
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


    describe('isEmpty', () => {
    describe('nullish values', () => {
        it('returns true for null', () => {
        expect(isEmpty(null)).to.equal(true)
        })

        it('returns true for undefined', () => {
        expect(isEmpty(undefined)).to.equal(true)
        })
    })

    describe('arrays', () => {
        it('returns true for empty array', () => {
        expect(isEmpty([])).to.equal(true)
        })

        it('returns false for non-empty array', () => {
        expect(isEmpty([1])).to.equal(false)
        })
    })

    describe('strings', () => {
        it('returns true for empty string', () => {
        expect(isEmpty('')).to.equal(true)
        })

        it('returns false for non-empty string', () => {
        expect(isEmpty('abc')).to.equal(false)
        })
    })

    describe('arguments objects', () => {
        it('returns true for empty arguments', () => {
        function getArgs() {
            return arguments
        }

        expect(isEmpty(getArgs())).to.equal(true)
        })

        it('returns false for non-empty arguments', () => {
        function getArgs() {
            return arguments
        }

        expect(isEmpty(getArgs(1))).to.equal(false)
        })
    })

    describe('typed arrays', () => {
        it('returns true for empty typed array', () => {
        expect(isEmpty(new Uint8Array())).to.equal(true)
        })

        it('returns false for non-empty typed array', () => {
        expect(isEmpty(new Uint8Array([1]))).to.equal(false)
        })
    })

    describe('array-like objects with splice', () => {
        it('returns true when length is zero', () => {
        const obj = {
            length: 0,
            splice() {}
        }

        expect(isEmpty(obj)).to.equal(true)
        })

        it('returns false when length is greater than zero', () => {
        const obj = {
            length: 1,
            splice() {}
        }

        expect(isEmpty(obj)).to.equal(false)
        })
    })

    describe('Map', () => {
        it('returns true for empty map', () => {
        expect(isEmpty(new Map())).to.equal(true)
        })

        it('returns false for non-empty map', () => {
        expect(isEmpty(new Map([['a', 1]]))).to.equal(false)
        })
    })

    describe('Set', () => {
        it('returns true for empty set', () => {
        expect(isEmpty(new Set())).to.equal(true)
        })

        it('returns false for non-empty set', () => {
        expect(isEmpty(new Set([1]))).to.equal(false)
        })
    })

    describe('prototype objects', () => {
        it('returns true for empty prototype', () => {
        function Test() {}

        expect(isEmpty(Test.prototype)).to.equal(true)
        })

        it('returns false for prototype with enumerable property', () => {
        function Test() {}

        Test.prototype.foo = 'bar'

        expect(isEmpty(Test.prototype)).to.equal(false)
        })
    })

    describe('plain objects', () => {
        it('returns true for empty object', () => {
        expect(isEmpty({})).to.equal(true)
        })

        it('returns false for object with own property', () => {
        expect(isEmpty({ a: 1 })).to.equal(false)
        })

        it('ignores inherited properties', () => {
        const proto = { inherited: true }
        const obj = Object.create(proto)

        expect(isEmpty(obj)).to.equal(true)
        })

        it('returns false when object contains own enumerable property', () => {
        const proto = { inherited: true }
        const obj = Object.create(proto)

        obj.own = true

        expect(isEmpty(obj)).to.equal(false)
        })
    })

    describe('primitive values', () => {
        it('returns true for number', () => {
        expect(isEmpty(123)).to.equal(true)
        })

        it('returns true for boolean', () => {
        expect(isEmpty(false)).to.equal(true)
        })

        it('returns true for symbol', () => {
        expect(isEmpty(Symbol('test'))).to.equal(true)
        })
    })
    })

})