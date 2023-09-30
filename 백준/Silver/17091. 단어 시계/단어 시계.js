const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [time, min] = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map(Number);

const timeStrs = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];

const getMinStr = (min) => {
    const unitStr = "minutes";
    if (min <= 20) {
        return `${timeStrs[min]} ${min === 1 ? "minute" : unitStr}`;
    } else {
        return `twenty ${timeStrs[min % 10]} ${unitStr}`;
    }
};

if (min === 0) {
    console.log(`${timeStrs[time]} o' clock`);
    return;
}
if (min === 15) {
    console.log(`quarter past ${timeStrs[time]}`);
    return;
}
if (min === 30) {
    console.log(`half past ${timeStrs[time]}`);
    return;
}
if (min === 45) {
    console.log(`quarter to ${timeStrs[(time + 1) % 12]}`);
    return;
}

let middleStr = "";

if (min < 30) {
    middleStr = "past";
    const timeStr = timeStrs[time];
    const minStr = getMinStr(min);

    console.log(`${minStr} ${middleStr} ${timeStr}`);
    return;
} else {
    middleStr = "to";
    const NextTimeStr = timeStrs[(time + 1) % 12];
    const restMin = 60 - min;
    const minStr = getMinStr(restMin);

    console.log(`${minStr} ${middleStr} ${NextTimeStr}`);
    return;
}
