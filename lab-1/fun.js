//waf to take any digit (0-9) and return its in word
//1-one
//5-five

const ToWord = (digit) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit];
}
console.log(ToWord(5));
console.log(ToWord(3));
console.log(ToWord(6));