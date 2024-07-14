class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = new RegExp(parts[0].substring(2));
            numbers = parts[1];
        }

        const parts = numbers.split(delimiter);
        const negatives = [];
        const sum = parts.reduce((sum, num) => {
            const number = parseInt(num, 10);
            if (number < 0) negatives.push(number);
            if (number <= 1000) return sum + number;
            return sum;
        }, 0);

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }

        return sum;
    }
}

module.exports = StringCalculator;

