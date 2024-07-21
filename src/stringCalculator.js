function extractDelimiter(numbers) {
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        return {
            delimiter: parts[0].substring(2),
            numbers: parts[1]
        };
    }
    return {
        delimiter: ",",
        numbers: numbers
    };
}

function splitNumbers(numbers, delimiter) {
    const numArray = numbers.split(new RegExp(`[${delimiter},\n]`));
    return numArray.map(num => parseInt(num)).filter(num => !isNaN(num));
}

function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        if (num <= 1000) {
            sum += num;
        }
        return sum;
    }, 0);
}

function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const { delimiter, numbers: nums } = extractDelimiter(numbers);
    const numArray = splitNumbers(nums, delimiter);
    return sumNumbers(numArray);
}

module.exports = {
    add,
};
