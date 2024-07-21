class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;
        
        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf('\n');
            const delimiter = numbers.substring(2, delimiterLineEnd);
            const numbersPart = numbers.substring(delimiterLineEnd + 1);
            const numberArray = numbersPart
                .split(delimiter)
                .map(Number)
                .filter(n => n <= 1000);
            
            const negatives = numberArray.filter(n => n < 0);
            if (negatives.length > 0) {
                throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
            }
            
            return numberArray.reduce((a, b) => a + b, 0);
        }
        
        const numberArray = numbers
            .replace(/\n/g, ',')
            .split(',')
            .map(Number)
            .filter(n => n <= 1000);
        
        const negatives = numberArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        
        return numberArray.reduce((a, b) => a + b, 0);
    }
}
