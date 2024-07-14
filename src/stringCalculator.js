function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  let customDelimiter = numbers.match(/^\/\/([^]*)\n/);
  if (customDelimiter) {
    delimiter = customDelimiter[1];
    numbers = numbers.replace(/^\/\/[^]*\n/, "");
  }

  let numArray = numbers.split(new RegExp(`[${delimiter}\n]`));
  let negatives = [];
  let sum = 0;

  for (let num of numArray) {
    if (num !== "") {
      let intNum = parseInt(num, 10);
      if (intNum < 0) {
        negatives.push(intNum);
      } else if (intNum <= 1000) {
        sum += intNum;
      }
    }
  }

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return sum;
}
