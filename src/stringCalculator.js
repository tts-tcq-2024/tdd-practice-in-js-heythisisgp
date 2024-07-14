class StringCalc {
    static addition(numbers) {
        if (numbers === '') {
            return 0;
        }

        let delimiters = [',', '\n'];
        let customMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
        
        if (customMatch) {
            let delimiterPart = customMatch[0];
            let delimiterPattern = /(\[.*?\])/g;
            let match;

            while (match = delimiterPattern.exec(delimiterPart)) {
                delimiters.push(match[1].slice(1, -1));
            }

            numbers = numbers.slice(customMatch[0].length);
        }

        let delimiterRegex = new RegExp('[' + delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('') + ']');
        let numberArray = numbers.split(delimiterRegex).map(num => parseInt(num, 10));
        
        let negativesValues = numberArray.filter(num => num < 0);
        if (negativesValues.length > 0) {
            throw new Error(`Negatives are not allowed: ${negativesValues.join(', ')}`);
        }

        return numberArray
            .filter(num => num <= 1000)
            .reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
}
