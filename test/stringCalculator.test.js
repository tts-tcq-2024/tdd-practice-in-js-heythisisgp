const { expect } = require('chai');
const { add } = require('../src/stringCalculator');
describe('StringCalculator Algorithm', () => {

    describe('stringCalculatorTests', () => {
      
        it('expectZeroForEmptyInput', () => {
            expect(add("")).to.equal(0);
        });

        it('expectZeroForSingleZero', () => {
              expect(add("0")).to.equal(0);
        });

        it('expectSumForTwoNumbers', () => {
             expect(add("1,2")).to.equal(3);
        });
      
        it('ignoreNumbersGreaterThan1000', () => {
             expect(add("1,1001")).to.equal(1);
        });
      
        it('expectSumWithCustomDelimiter', () => {
             expect(add("//;\n1;2")).to.equal(3);
        });
      
        it('expectSumWithNewlineDelimiter', () => {
             expect(add("1\n2,3")).to.equal(6);
        });
      
    });
});
