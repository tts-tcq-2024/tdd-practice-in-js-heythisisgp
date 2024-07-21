// Test Case 1: Empty String
function testEmptyString() {
    const calculator = new StringCalculator();
    const result = calculator.add("");
    console.assert(result === 0, `Expected 0 but got ${result}`);
}

// Test Case 2: Single Number
function testSingleNumber() {
    const calculator = new StringCalculator();
    const result = calculator.add("1");
    console.assert(result === 1, `Expected 1 but got ${result}`);
}

// Test Case 3: Two Numbers
function testTwoNumbers() {
    const calculator = new StringCalculator();
    const result = calculator.add("1,2");
    console.assert(result === 3, `Expected 3 but got ${result}`);
}

// Test Case 4: Handling New Lines
function testNewLines() {
    const calculator = new StringCalculator();
    const result = calculator.add("1\n2,3");
    console.assert(result === 6, `Expected 6 but got ${result}`);
}

// Test Case 5: Handling Custom Delimiters
function testCustomDelimiter() {
    const calculator = new StringCalculator();
    const result = calculator.add("//;\n1;2");
    console.assert(result === 3, `Expected 3 but got ${result}`);
}

// Test Case 6: Handling Negative Numbers
function testNegativeNumbers() {
    try {
        const calculator = new StringCalculator();
        calculator.add("1,-2,3");
    } catch (e) {
        console.assert(e.message === "Negatives not allowed: -2", `Expected "Negatives not allowed: -2" but got ${e.message}`);
    }
}

// Test Case 7: Ignoring Numbers Greater Than 1000
function testIgnoreNumbersGreaterThan1000() {
    const calculator = new StringCalculator();
    const result = calculator.add("2,1001");
    console.assert(result === 2, `Expected 2 but got ${result}`);
}
