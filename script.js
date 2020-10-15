// function that takes numbers 1 - 10 and console logs them.Use a
// for loop.*/

function takesNum(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
takesNum();
/*
2-Using a while loop, return an array that contains all odd numbers between 3 and 103
*/
function loopOddNum(start, end) {
    let x = [],
        i = Math.floor(start / 2) * 2 + 1;
    while (i <= end) {
        x.push(i);
        i += 2;
    };
    return x;
}
console.log(loopOddNum(3, 103));
/*
3- arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 18, use any loop.
*/
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6]));
/*
4-Use a loop to display the numbers 9 to 0 in descending order.
*/
function loopBack(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
loopBack(9);
/*
5-Write a function computing the factorial of n
*/
function computingNum(n) {
    return (n != 1) ? n * computingNum(n - 1) : 1;
}
console.log(computingNum(5));
/*
6-Write a function using a for loop that returns the sum of all numbers from 1 to n.
*/
function loopN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(loopN(6));
/*
7-Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
Let string = “donuts”
Expected output => dZnZtZ
*/
function changLetter(str) {
    return str.split("").map((letter, index) => {
            return index % 2 === 1 ? (letter = "Z") : letter.toLowerCase();
        })
        .join("");
}
console.log(changLetter('donuts'))