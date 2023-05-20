/**
 * @jest-environment jsdom
 */


const addition = require("../calc")

describe('Calculator', () => {
    describe('Addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20,22)).toBe(42)
        })
        test('should return 87 for 50 + 37', () => {
            expect(addition(50,37)).toBe(87)
        })
    })
    describe('Subtraction function', () => {

    })
    describe('Multiplication function', () => {

    })
    describe('Division function', () => {

    })
})