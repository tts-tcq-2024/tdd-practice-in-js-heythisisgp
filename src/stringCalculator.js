class StringCalc {
   static add(numbers) {
        if (numbers === '') {
            return 0;
        }

        let delimiters = [',', '\n'];
        let customDelimitMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
        
        if (customDelimitMatch) {
            let delimiterPart = customDelimitMatch[0];
            let delimiterPattern = /(\[.*?\])/g;
            let matchResult;

            while ((matchResult = delimiterPattern.exec(delimiterPart)) !== null) {
                delimiters.push(matchResult[1].slice(1, -1));
            }

            numbers = numbers.slice(customDelimitMatch[0].length);
        }

        let escapedDelimiters = delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        let delimiterRegex = new RegExp(escapedDelimiters.join('|'));
        let numberArray = numbers.split(delimiterRegex).map(num => parseInt(num, 10));
        
        let negativeNumber = numberArray.filter(num => num < 0);
        if (negativeNumber.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }

        return numberArray
            .filter(num => num <= 1000)
            .reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
}

try {
    console.log(StringCalc.add("")); // 0
    console.log(StringCalc.add("1\n2,3")); // 6
    console.log(StringCalc.add("//;\n1;2")); // 3
    console.log(StringCalc.add("//[***]\n1***2***3")); // 6
    console.log(StringCalc.add("2,1001")); // 2
    console.log(StringCalc.add("2,-1,3,-4")); // Error: Negatives not allowed: -1, -4
} catch (e) {
    console.error(e.message);
}
