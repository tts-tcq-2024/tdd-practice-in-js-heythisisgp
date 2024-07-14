const { expect } = require('chai');
const { add } = require('../src/stringCalculator');

describe('StringCalculator Algorithm', () => {
    describe('stringCalculatorTests', () => {
      
        it('expectZeroForEmptyInput', () => {
            expect(add("")).to.equal(0);
        });

        it('expectZeroForOneZero', () => {
            expect(add("0")).to.equal(0);
        });

        it('expectSumForTwoNumber', () => {
            expect(add("1,2")).to.equal(3);
        });
      
        it('prevntNumbersGreaterThan1000', () => {
            expect(add("1,1001")).to.equal(1);
        });
      
        it('expectSumWithCustomDelimiter', () => {
            expect(add("//;\n1;2")).to.equal(3);
        });
      
        it('expectSumWithNewlineDelimiter', () => {
            expect(add("1\n2,3")).to.equal(6);
        });

        it('expectSumForMultipleNumbers', () => {
            expect(add("1,2,3,4,5")).to.equal(15);
        });

        it('expectExceptionForNegativeNumbers', () => {
            expect(() => add("1,-2,3")).to.throw('Negatives not allowed: -2');
        });

        it('expectSumWithMultipleCustomDelimiters', () => {
            expect(add("//[*][%]\n1*2%3")).to.equal(6);
        });

        it('expectSumWithMultipleCharacterDelimiter', () => {
            expect(add("//[***]\n1***2***3")).to.equal(6);
        });

        it('expectSumWithLeadingNewline', () => {
            expect(add("\n1,2")).to.equal(3);
        });

        it('expectSumForSingleNumber', () => {
            expect(add("5")).to.equal(5);
        });
      
    });
});
